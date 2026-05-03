import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { z } from 'zod'

export const starterVideoSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
})

type StarterVideoProps = z.infer<typeof starterVideoSchema>

export function StarterVideo({ title, subtitle }: StarterVideoProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const scale = spring({ frame, fps, config: { damping: 18, stiffness: 120 } })
  const opacity = interpolate(frame, [0, 24], [0, 1], { extrapolateRight: 'clamp' })
  const accentWidth = interpolate(frame, [20, 80], [0, 760], { extrapolateRight: 'clamp' })

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #111827 50%, #312e81 100%)',
        color: 'white',
        display: 'flex',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        justifyContent: 'center',
      }}
    >
      <div style={{ opacity, textAlign: 'center', transform: `scale(${scale})` }}>
        <div
          style={{
            backgroundColor: '#22c55e',
            borderRadius: 999,
            height: 10,
            margin: '0 auto 48px',
            width: accentWidth,
          }}
        />
        <h1
          style={{
            fontSize: 116,
            fontWeight: 900,
            letterSpacing: '-0.07em',
            lineHeight: 1,
            margin: 0,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: 38,
            lineHeight: 1.35,
            margin: '36px auto 0',
            maxWidth: 1100,
          }}
        >
          {subtitle}
        </p>
      </div>
    </AbsoluteFill>
  )
}
