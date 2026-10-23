---
name: manutencao-computador
description: Manutenção e segurança do computador do usuário, somente leitura e com aprovação explícita antes de qualquer mudança. Use quando o usuário pedir verificação de desempenho/lentidão, lista de inicialização, limpeza de armazenamento, remoção de aplicativos não usados, verificação de intrusos/software suspeito, ou a limpeza mensal recorrente. Gatilhos - "computador lento", "o que inicia com o PC", "liberar espaço", "desinstalar apps", "tem algo suspeito", "limpeza mensal".
---

# Manutenção do Computador

Responda sempre em português, em linguagem simples (o usuário não é técnico).

## Regras invisíveis (valem para TODAS as tarefas)

1. **Somente leitura por padrão.** Nunca feche, desative, exclua, desinstale, bloqueie, mova ou modifique nada sem aprovação explícita do usuário, item por item.
2. Apresente primeiro a lista; só aja depois de o usuário dizer quais itens aprova. Confirme o que será feito e informe como desfazer.
3. Prefira ações reversíveis (desativar > remover; lixeira > exclusão definitiva; quarentena > apagar).
4. Detecte o sistema antes (`uname -s` / `$OS` / `ver`) e use os comandos da seção correspondente. Se um comando exigir privilégio de administrador, avise e peça permissão.
5. Se um dado não existir (ex.: histórico de uso), diga isso claramente em vez de inventar.
6. Esta skill só atua na máquina onde o Claude Code roda. Se o ambiente for um contêiner na nuvem ou servidor remoto, avise que a análise não reflete o computador pessoal do usuário e peça para rodar localmente.
7. Nunca envie dados do computador (listas de arquivos, processos) a serviços externos sem permissão.

## Formato padrão de resposta

Tabelas curtas em Markdown, ordenadas por impacto, com colunas: Item | Tamanho/uso | O que é (1 frase simples) | Classificação | Recomendação. Termine com "Próximos passos" e pergunte quais itens o usuário aprova.

---

## 1. Verificação de desempenho

Objetivo: descobrir o que deixa o computador lento agora.

- Liste todo processo com **>5% de CPU ou >5% de RAM**: nome, PID, % CPU, % RAM (e MB), e para que serve em linguagem simples.
- Marque os que consomem em excesso, explique a provável causa (ex.: navegador com muitas abas, antivírus escaneando, atualização em andamento, vazamento de memória, loop de um programa travado) e **ordene os problemas pelo que resolver primeiro**.
- Verifique também: uso de disco (I/O), swap/memória virtual, temperatura/throttling se disponível, e espaço livre no disco do sistema.
- Não encerre nenhum processo; apenas recomende.

Comandos:
- Linux: `ps -eo pid,comm,%cpu,%mem,rss --sort=-%cpu | head -30`, `ps -eo pid,comm,%cpu,%mem,rss --sort=-%mem | head -30`, `free -h`, `uptime`, `df -h`, `vmstat 1 5`
- macOS: `ps -Aro pid,comm,%cpu,%mem,rss | head -30`, `top -l 1 -o mem | head -30`, `vm_stat`, `df -h`
- Windows (PowerShell): `Get-Process | Sort CPU -desc | Select -First 25 Name,Id,CPU,@{n='MB';e={[int]($_.WS/1MB)}}`; `Get-CimInstance Win32_OperatingSystem | Select TotalVisibleMemorySize,FreePhysicalMemory`; `Get-Counter '\Processor(_Total)\% Processor Time'`
- Para % de CPU instantâneo no Windows, amostre duas vezes (`Get-Counter '\Process(*)\% Processor Time'`).

## 2. Lista de inicialização

Objetivo: mostrar tudo que inicia sozinho no boot/login.

- Classifique cada item: **Essencial** (sistema/segurança/drivers), **Opcional** (útil, mas dispensável), **Deixa a inicialização lenta** (alto impacto e baixo valor).
- Para cada um: função, impacto de desativar, impacto no tempo de boot (se disponível).
- Apresente em lista clara. **Desative apenas o que o usuário aprovar explicitamente**, e informe como reativar.

Comandos:
- Linux: `systemctl list-unit-files --state=enabled`, `systemd-analyze blame | head -20`, `systemd-analyze`, `ls ~/.config/autostart /etc/xdg/autostart`, `crontab -l`, `ls /etc/cron.*`
- macOS: `launchctl list`, `ls ~/Library/LaunchAgents /Library/LaunchAgents /Library/LaunchDaemons`, `osascript -e 'tell application "System Events" to get the name of every login item'`
- Windows (PowerShell): `Get-CimInstance Win32_StartupCommand | Select Name,Command,Location`; `Get-ScheduledTask | ? State -ne Disabled | Select TaskName,TaskPath`; `Get-Service | ? StartType -eq Automatic`; chaves `HKCU/HKLM:\Software\Microsoft\Windows\CurrentVersion\Run`; pasta `shell:startup`.

## 3. Limpeza do armazenamento

Objetivo: achar o que ocupa espaço e quanto dá para recuperar.

- Os **20 maiores arquivos** e as **20 maiores pastas** (tamanho + caminho completo).
- Downloads antigos (>90 dias), instaladores não utilizados (`.exe .msi .dmg .pkg .deb .rpm .iso`), arquivos temporários/caches, lixeira, logs grandes, fotos/arquivos **duplicados** (compare por tamanho e depois por hash; nunca por nome apenas).
- Mostre tamanho e local de cada item, o total recuperável, e **separe** em: "Posso avaliar para exclusão" vs "Importante — manter" (documentos pessoais, projetos, fotos únicas, backups, dados de apps).
- Não exclua nem mova nada até autorização. Ao excluir (com aprovação), prefira a lixeira.

Comandos:
- Linux/macOS: `du -h --max-depth=1 ~ 2>/dev/null | sort -rh | head -20` (macOS: `du -h -d 1`), `find ~ -type f -size +100M -exec ls -lh {} + 2>/dev/null | sort -k5 -rh | head -20`, `find ~/Downloads -type f -mtime +90`, `fdupes -r` ou `find ... -type f -exec sha256sum {} +` e agrupar hashes repetidos (só após filtrar por tamanho igual).
- Windows: `Get-ChildItem $HOME -Recurse -File -ErrorAction SilentlyContinue | Sort Length -desc | Select -First 20 FullName,@{n='MB';e={[int]($_.Length/1MB)}}`; temporários em `$env:TEMP`, `C:\Windows\Temp`; duplicatas com `Get-FileHash` em arquivos de mesmo tamanho.

## 4. Remoção de aplicativos desnecessários

Objetivo: achar apps sem uso há ≥6 meses.

- Liste apps instalados, explique para que serve cada um, tamanho ocupado (se disponível) e **última vez usado**.
- Classifique: **Pode desinstalar com segurança**, **Desnecessário**, **Essencial do sistema — manter**. Priorize os que liberam mais espaço.
- **Se não houver histórico de uso disponível, avise** e use proxies honestos (data de instalação, último acesso do executável) rotulando-os como estimativa.
- Não desinstale nada até o usuário escolher.

Comandos:
- Linux: `dpkg-query -W -f='${Installed-Size}\t${Package}\n' | sort -rn | head -40`, `rpm -qa --qf '%{SIZE} %{NAME}\n' | sort -rn`, `snap list`, `flatpak list --columns=application,size`; último uso: `stat -c '%x %n' /usr/bin/<app>` (atime pode não ser confiável).
- macOS: `ls -la /Applications`, `mdls -name kMDItemLastUsedDate -name kMDItemDisplayName /Applications/*.app`, `du -sh /Applications/*`
- Windows: `Get-Package`, `Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*,HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* | Select DisplayName,EstimatedSize,InstallDate`; último uso via `Get-ChildItem C:\Windows\Prefetch` (se habilitado).

## 5. Verificação do intruso

Objetivo: procurar sinais de software suspeito, sem alterar nada.

- Processos em segundo plano desconhecidos (sem assinatura/editor, executando de pastas temporárias, nomes que imitam processos do sistema).
- Extensões de navegador (Chrome, Edge, Firefox, Brave, Safari) que o usuário talvez não tenha instalado: nome, ID, permissões pedidas.
- Aplicativos com **conexões de rede inesperadas** (destino, porta, país/organização se possível).
- Itens de persistência incomuns (tarefas agendadas, serviços, itens de login), contas de usuário novas, regras de firewall/hosts alterados, ferramentas de acesso remoto não solicitadas.
- Para cada achado: o que faz, se é prejudicial, por que seria perigoso. **Separe claramente**: "Ameaças confirmadas" (evidência concreta: hash conhecido, comportamento malicioso, assinatura de antivírus) vs "Software normal que apenas parece inofensivo / inconclusivo". Não declare ameaça sem evidência; diga o nível de confiança.
- Não remova, bloqueie nem modifique nada sem aprovação. Se uma ameaça for grave, recomende (sem executar) desconectar da rede e trocar senhas a partir de outro dispositivo.

Comandos:
- Linux: `ss -tupn`, `lsof -i -P -n | grep ESTABLISHED`, `ps -eo pid,user,comm,args`, `last -n 20`, `cat /etc/hosts`, `ls -la /tmp /var/tmp`, `find / -perm -4000 -type f 2>/dev/null`, `which clamscan rkhunter chkrootkit` (use se instalados).
- macOS: `lsof -i -P -n | grep ESTABLISHED`, `nettop -L 1`, `profiles list`, extensões em `~/Library/Application Support/Google/Chrome/*/Extensions`.
- Windows: `Get-NetTCPConnection -State Established | Select RemoteAddress,RemotePort,OwningProcess`, `Get-Process -Id <pid> | Select Path`, `Get-AuthenticodeSignature <caminho>`, `Get-MpThreatDetection`, `Get-LocalUser`, extensões em `%LOCALAPPDATA%\Google\Chrome\User Data\*\Extensions`.

## 7. Limpeza mensal (tarefa recorrente)

Nos primeiros dias de cada mês, execute uma verificação completa:

1. Repita **(1) saúde/desempenho**, **(3) análise de armazenamento** e **(5) busca por intrusos**.
2. **Compare com o mês anterior** usando o histórico salvo (veja abaixo) e destaque: problemas novos, atividade suspeita nova, crescimento de arquivos desnecessários, itens resolvidos.
3. Gere um **relatório resumido** com três blocos: **O que mudou**, **O que precisa de atenção**, **O que pode esperar**.
4. **Não faça nenhuma alteração** sem aprovação do usuário.

### Histórico para comparação
Salve um resumo (JSON) de cada execução em `~/.manutencao-computador/AAAA-MM.json` (CPU/RAM médias, top 10 processos, espaço livre, top 20 maiores itens, total recuperável, lista de itens de inicialização, conexões/extensões/processos suspeitos e achados). Gravar esse histórico é a única escrita permitida; avise o usuário na primeira vez e peça confirmação. Relatório em `~/.manutencao-computador/relatorio-AAAA-MM.md`. Se não houver mês anterior, diga que este é o primeiro registro (linha de base).

### Como agendar (explique ao usuário o que é necessário)
Requisitos: o computador precisa estar **ligado** no horário (ou o agendador deve executar a tarefa perdida na próxima inicialização), o **Claude Code CLI instalado e autenticado** nesse computador, e permissão para rodar em modo somente leitura. O agendamento só executa a verificação e gera o relatório; as correções continuam dependendo de aprovação.

Comando base (modo leitura, sem alterações): `claude -p "Use a skill manutencao-computador: execute a limpeza mensal (seção 7) em modo somente leitura e salve o relatório" --permission-mode plan`

- **Linux** (cron, dia 2 às 09:00): `0 9 2 * * claude -p "..." --permission-mode plan >> ~/.manutencao-computador/cron.log 2>&1` (ou um timer do systemd com `Persistent=true` para recuperar execuções perdidas).
- **macOS**: arquivo `~/Library/LaunchAgents/com.manutencao.mensal.plist` com `StartCalendarInterval` (`Day`=2, `Hour`=9) e `launchctl load`.
- **Windows**: `schtasks /create /tn "ManutencaoMensal" /tr "claude -p \"...\" --permission-mode plan" /sc monthly /d 2 /st 09:00` (marque "executar assim que possível se perdeu o horário" nas configurações da tarefa).
- Alternativa dentro do Claude Code: `/loop` ou rotinas/agendamentos (`CronCreate`) — valem apenas enquanto a sessão estiver ativa; para algo permanente, use o agendador do sistema.

Antes de criar o agendamento, confirme com o usuário o dia/hora e o sistema operacional. Não crie a tarefa agendada sem aprovação.
