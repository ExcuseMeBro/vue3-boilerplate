import { Composition } from 'remotion'

import { StarterVideo, starterVideoSchema } from './StarterVideo'

export function RemotionRoot() {
  return (
    <Composition
      id="StarterVideo"
      component={StarterVideo}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      schema={starterVideoSchema}
      defaultProps={{
        title: 'Vue 3 Boilerplate',
        subtitle: 'REST, JWT, i18n, Biome, and Remotion ready',
      }}
    />
  )
}
