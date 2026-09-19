<script>
  import { onMount } from 'svelte';

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    const stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.length = 0;
      for (let i = 0; i < 240; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.3,
          base: Math.random() * 0.55 + 0.08,
          speed: Math.random() * 0.010 + 0.002,
          phase: Math.random() * Math.PI * 2,
          hue: Math.random() < 0.12 ? 'warm' : Math.random() < 0.12 ? 'blue' : 'white',
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    let frame;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      for (const s of stars) {
        const alpha = s.base * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
        let color;
        if (s.hue === 'warm') color = `rgba(0, 132, 255, ${alpha})`;
        else if (s.hue === 'blue') color = `rgba(18, 103, 244, ${alpha})`;
        else color = `rgba(245, 247, 250, ${alpha})`;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }
</style>
