import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface ParticlesProps {
  count?: number
  size?: number
  spread?: number
}

export const Particles = ({
  count = 100,
  size = 0.08,
  spread = 20,
}: ParticlesProps) => {
  const linesRef = useRef<THREE.LineSegments>(null)

  const { positions, colors } = useMemo(() => {
    const barsPerAxis = 20 // Her eksende 20 çubuk
    const lineCount = barsPerAxis * 3 // 3 eksen (X, Y, Z)
    const positions = new Float32Array(lineCount * 6)
    const colors = new Float32Array(lineCount * 6)
    const barLength = 10
    const gridSpacing = 1.5

    let lineIndex = 0

    // X ekseni çubukları (sağa-sola)
    for (let i = 0; i < barsPerAxis; i++) {
      const i6 = lineIndex * 6
      const y = (i - barsPerAxis / 2) * gridSpacing
      const z = Math.sin(i * 0.5) * 3

      positions[i6] = -barLength
      positions[i6 + 1] = y
      positions[i6 + 2] = z

      positions[i6 + 3] = barLength
      positions[i6 + 4] = y
      positions[i6 + 5] = z

      const usePrimary = i % 3 === 0
      colors[i6] = usePrimary ? 1 : 0.7
      colors[i6 + 1] = usePrimary ? 0.84 : 0.7
      colors[i6 + 2] = usePrimary ? 0 : 0.7
      colors[i6 + 3] = usePrimary ? 1 : 0.7
      colors[i6 + 4] = usePrimary ? 0.84 : 0.7
      colors[i6 + 5] = usePrimary ? 0 : 0.7

      lineIndex++
    }

    // Y ekseni çubukları (yukarı-aşağı)
    for (let i = 0; i < barsPerAxis; i++) {
      const i6 = lineIndex * 6
      const x = (i - barsPerAxis / 2) * gridSpacing
      const z = Math.cos(i * 0.5) * 3

      positions[i6] = x
      positions[i6 + 1] = -barLength
      positions[i6 + 2] = z

      positions[i6 + 3] = x
      positions[i6 + 4] = barLength
      positions[i6 + 5] = z

      const usePrimary = i % 3 === 1
      colors[i6] = usePrimary ? 1 : 0.7
      colors[i6 + 1] = usePrimary ? 0.84 : 0.7
      colors[i6 + 2] = usePrimary ? 0 : 0.7
      colors[i6 + 3] = usePrimary ? 1 : 0.7
      colors[i6 + 4] = usePrimary ? 0.84 : 0.7
      colors[i6 + 5] = usePrimary ? 0 : 0.7

      lineIndex++
    }

    // Z ekseni çubukları (ileri-geri)
    for (let i = 0; i < barsPerAxis; i++) {
      const i6 = lineIndex * 6
      const x = (i - barsPerAxis / 2) * gridSpacing
      const y = Math.sin(i * 0.7) * 3

      positions[i6] = x
      positions[i6 + 1] = y
      positions[i6 + 2] = -barLength

      positions[i6 + 3] = x
      positions[i6 + 4] = y
      positions[i6 + 5] = barLength

      const usePrimary = i % 3 === 2
      colors[i6] = usePrimary ? 1 : 0.7
      colors[i6 + 1] = usePrimary ? 0.84 : 0.7
      colors[i6 + 2] = usePrimary ? 0 : 0.7
      colors[i6 + 3] = usePrimary ? 1 : 0.7
      colors[i6 + 4] = usePrimary ? 0.84 : 0.7
      colors[i6 + 5] = usePrimary ? 0 : 0.7

      lineIndex++
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (!linesRef.current) return

    const time = state.clock.getElapsedTime()

    // Yavaş ve düzgün rotasyon
    linesRef.current.rotation.y = time * 0.15
    linesRef.current.rotation.x = Math.sin(time * 0.08) * 0.2
    linesRef.current.rotation.z = Math.cos(time * 0.06) * 0.15
  })

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={60 * 2}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={60 * 2}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.25}
        linewidth={3}
        blending={THREE.NormalBlending}
      />
    </lineSegments>
  )
}
