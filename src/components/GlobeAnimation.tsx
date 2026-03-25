import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GlobeAnimationProps {
  size?: 'full' | 'mini';
  className?: string;
}

export default function GlobeAnimation({ size = 'full', className = '' }: GlobeAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = size === 'mini' ? 3.5 : 4;

    const isMini = size === 'mini';
    const radius = isMini ? 0.8 : 1.4;

    // Main sphere wireframe
    const sphereGeo = new THREE.SphereGeometry(radius, 24, 16);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0xF5A623,
      wireframe: true,
      transparent: true,
      opacity: isMini ? 0.15 : 0.12,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Inner glow sphere
    const innerGeo = new THREE.SphereGeometry(radius * 0.98, 16, 12);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xF5A623,
      transparent: true,
      opacity: isMini ? 0.03 : 0.04,
      side: THREE.FrontSide,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Orbital rings
    const createRing = (radiusR: number, tilt: number, rotY: number, opacity: number) => {
      const ringGeo = new THREE.TorusGeometry(radiusR, 0.003, 8, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xF5A623,
        transparent: true,
        opacity,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tilt;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(radius * 1.3, Math.PI / 4, 0, isMini ? 0.5 : 0.6);
    const ring2 = createRing(radius * 1.5, -Math.PI / 5, Math.PI / 3, isMini ? 0.3 : 0.4);
    const ring3 = createRing(radius * 1.7, Math.PI / 2.5, -Math.PI / 4, isMini ? 0.2 : 0.25);
    scene.add(ring1, ring2, ring3);

    // Particles
    const particleCount = isMini ? 60 : 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (1.2 + Math.random() * 1.2);
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xF5A623,
      size: isMini ? 0.015 : 0.02,
      transparent: true,
      opacity: isMini ? 0.5 : 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation loop
    let t = 0;
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      t += 0.005;

      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.001;

      ring1.rotation.z += 0.004;
      ring2.rotation.z -= 0.003;
      ring3.rotation.x += 0.002;

      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      // Pulsing scale
      const pulse = 1 + Math.sin(t) * 0.015;
      sphere.scale.setScalar(pulse);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      sphereGeo.dispose();
      innerGeo.dispose();
      particleGeo.dispose();
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
