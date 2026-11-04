import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';
import TL from './timeline.json';
export const RemotionRoot: React.FC = () => (
  <Composition id="JeysHair" component={Video} durationInFrames={Math.round(TL.dur * TL.fps)} fps={TL.fps} width={1080} height={1920} />
);
