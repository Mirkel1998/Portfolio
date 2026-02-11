<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const canvasRef = ref(null)
const frameRef = ref(null)
const ctx = ref(null)
const isDrawing = ref(false)
const brushSize = ref(8)
const brushColor = ref('#00FFFF')
const tool = ref('brush')
const showCursor = ref(false)
const cursorPos = ref({ x: 0, y: 0 })

const backgroundColor = '#07071a'

const colors = [
    '#00FFFF',
    '#FF00FF',
    '#FFFF00',
    '#FF8A00',
    '#6CFF7C',
    '#9B5DE5',
    '#F8F8FF',
    '#1A1A1A',
]

const setCanvasSize = () => {
    const canvas = canvasRef.value
    const frame = frameRef.value
    if (!canvas || !frame) return

    const rect = frame.getBoundingClientRect()
    canvas.width = Math.max(320, Math.floor(rect.width))
    canvas.height = Math.max(360, Math.floor(rect.height))

    const context = canvas.getContext('2d')
    ctx.value = context
    context.lineJoin = 'round'
    context.lineCap = 'round'
    context.fillStyle = backgroundColor
    context.fillRect(0, 0, canvas.width, canvas.height)
    updateBrush()
}

const updateBrush = () => {
    if (!ctx.value) return
    ctx.value.lineWidth = brushSize.value
    ctx.value.strokeStyle = tool.value === 'eraser' ? backgroundColor : brushColor.value
}

const getPoint = (event) => {
    const canvas = canvasRef.value
    const rect = canvas.getBoundingClientRect()
    if (event.touches && event.touches.length) {
        return {
            x: event.touches[0].clientX - rect.left,
            y: event.touches[0].clientY - rect.top,
        }
    }

    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    }
}

const startDrawing = (event) => {
    if (!ctx.value) return
    isDrawing.value = true
    const { x, y } = getPoint(event)
    ctx.value.beginPath()
    ctx.value.moveTo(x, y)
}

const draw = (event) => {
    if (!isDrawing.value || !ctx.value) return
    const { x, y } = getPoint(event)
    ctx.value.lineTo(x, y)
    ctx.value.stroke()
}

const handlePointerMove = (event) => {
    if (!canvasRef.value) return
    const { x, y } = getPoint(event)
    cursorPos.value = { x, y }
    if (isDrawing.value) {
        draw(event)
    }
}

const handlePointerLeave = () => {
    showCursor.value = false
    stopDrawing()
}

const handlePointerEnter = () => {
    showCursor.value = true
}

const stopDrawing = () => {
    if (!ctx.value) return
    isDrawing.value = false
    ctx.value.closePath()
}

const clearCanvas = () => {
    if (!ctx.value || !canvasRef.value) return
    ctx.value.fillStyle = backgroundColor
    ctx.value.fillRect(0, 0, canvasRef.value.width, canvasRef.value.height)
}

const downloadArt = () => {
    if (!canvasRef.value) return
    const link = document.createElement('a')
    link.href = canvasRef.value.toDataURL('image/png')
    link.download = 'paint-67.png'
    link.click()
}

const setTool = (nextTool) => {
    tool.value = nextTool
    updateBrush()
}

const brushPreviewStyle = computed(() => ({
    width: `${brushSize.value}px`,
    height: `${brushSize.value}px`,
    left: `${cursorPos.value.x}px`,
    top: `${cursorPos.value.y}px`,
    borderColor: tool.value === 'eraser' ? '#FFFF00' : brushColor.value,
    boxShadow: tool.value === 'eraser'
        ? '0 0 10px rgba(255, 255, 0, 0.8)'
        : `0 0 10px ${brushColor.value}`,
}))

watch([brushSize, brushColor, tool], updateBrush)

onMounted(() => {
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', setCanvasSize)
})
</script>

<template>
    <section class="paint-hero">
        <div class="paint-hero__content">
            <h1 class="paint-hero__title">
                // PAINT.67 //
            </h1>
            <p class="paint-hero__subtitle">It's paint, just "slightly" worse.</p>
        </div>
    </section>

    <section class="paint-shell">
        <div class="paint-layout">
            <aside class="paint-tools">
                <div class="tools-card">
                    <h2 class="tools-title">Tools</h2>

                    <div class="tool-row">
                        <button type="button" class="tool-button" :class="{ active: tool === 'brush' }"
                            @click="setTool('brush')">
                            Brush
                        </button>
                        <button type="button" class="tool-button" :class="{ active: tool === 'eraser' }"
                            @click="setTool('eraser')">
                            Eraser
                        </button>
                    </div>

                    <div class="tool-group">
                        <label for="brushSize">Brush Size</label>
                        <input id="brushSize" v-model.number="brushSize" type="range" min="2" max="28" />
                        <p class="tool-readout">{{ brushSize }} px</p>
                    </div>

                    <div class="tool-group">
                        <label>Color</label>
                        <div class="swatch-grid">
                            <button v-for="color in colors" :key="color" type="button" class="swatch"
                                :class="{ active: brushColor === color }" :style="{ '--swatch': color }"
                                @click="brushColor = color"></button>
                        </div>
                        <div class="color-picker">
                            <input id="customColor" v-model="brushColor" type="color" />
                            <label for="customColor" class="color-label">Custom: {{ brushColor }}</label>
                        </div>
                    </div>

                    <div class="tool-actions">
                        <button type="button" class="action-button" @click="clearCanvas">Clear</button>
                        <button type="button" class="action-button accent" @click="downloadArt">Download</button>
                    </div>
                </div>
            </aside>

            <div class="paint-canvas">
                <div ref="frameRef" class="canvas-frame">
                    <canvas ref="canvasRef" class="canvas-area" @mousedown="startDrawing" @mousemove="handlePointerMove"
                        @mouseup="stopDrawing" @mouseleave="handlePointerLeave" @mouseenter="handlePointerEnter"
                        @touchstart.prevent="startDrawing" @touchmove.prevent="handlePointerMove"
                        @touchend="stopDrawing"></canvas>
                    <div v-if="showCursor" class="brush-preview" :style="brushPreviewStyle"></div>
                    <div class="canvas-overlay"></div>
                </div>
                <div class="canvas-hint">Tip: There is no tip, it's paint.</div>
            </div>
        </div>
    </section>
</template>

<style scoped>
:global(body) {
    background-color: #07071a;
}

.paint-hero {
    background: radial-gradient(circle at top, rgba(0, 255, 255, 0.2), rgba(0, 0, 51, 0.95) 70%),
        linear-gradient(120deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.06));
    border-bottom: 4px solid #00FFFF;
    box-shadow: 0 8px 20px rgba(0, 255, 255, 0.3);
    padding: 3.5rem 1.5rem 3rem;
    text-align: center;
}

.paint-hero__content {
    max-width: 1200px;
    margin: 0 auto;
}

.paint-hero__title {
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: #00FFFF;
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.8;
    text-shadow:
        3px 3px 0px #000033,
        0 0 10px #00FFFF,
        0 0 20px #00FFFF;
    animation: neonFlicker 2s infinite alternate;
}

@keyframes neonFlicker {

    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
        opacity: 1;
    }

    20%,
    24%,
    55% {
        opacity: 0.8;
    }
}

.paint-hero__subtitle {
    font-family: 'VT323', monospace;
    color: #F8F8FF;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.6;
}

.paint-shell {
    padding: 3rem 1.5rem 5rem;
}

.paint-layout {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
}

@media (min-width: 900px) {
    .paint-layout {
        grid-template-columns: 320px 1fr;
        align-items: start;
    }
}

.tools-card {
    background: #0A0A2A;
    border: 3px solid #FF00FF;
    padding: 2rem;
    box-shadow: 0 0 24px rgba(255, 0, 255, 0.25);
}

.tools-title {
    font-family: 'Press Start 2P', cursive;
    color: #F8F8FF;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
}

.tool-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.tool-button {
    background: #000033;
    border: 2px solid #00FFFF;
    color: #F8F8FF;
    padding: 0.6rem 0.8rem;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.65rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.1s steps(2), box-shadow 0.1s steps(2);
}

.tool-button.active {
    background: #00FFFF;
    color: #000033;
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.7);
    transform: translate(-2px, -2px);
}

.tool-group {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-family: 'VT323', monospace;
    color: #BBD7FF;
    font-size: 1.1rem;
}

.tool-group input[type='range'] {
    accent-color: #00FFFF;
}

.tool-readout {
    color: #F8F8FF;
    font-size: 1rem;
}

.swatch-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
}

.swatch {
    width: 100%;
    aspect-ratio: 1;
    border: 2px solid #1a1a3e;
    background: var(--swatch);
    cursor: pointer;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
    transition: transform 0.1s steps(2);
}

.swatch.active {
    transform: translate(-2px, -2px);
    border-color: #FFFF00;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.7);
}

.color-picker {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-top: 0.5rem;
}

.color-picker input[type='color'] {
    width: 44px;
    height: 44px;
    border: 2px solid #00FFFF;
    background: #000033;
    padding: 2px;
    cursor: pointer;
}

.color-label {
    font-size: 1rem;
    color: #F8F8FF;
}

.tool-actions {
    display: grid;
    gap: 0.75rem;
    margin-top: 1rem;
}

.action-button {
    background: #000033;
    border: 2px solid #00FFFF;
    color: #F8F8FF;
    padding: 0.7rem 1rem;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.7rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.1s steps(2), box-shadow 0.1s steps(2);
}

.action-button.accent {
    border-color: #FFFF00;
    color: #FFFF00;
}

.action-button:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.7);
}

.paint-canvas {
    display: grid;
    gap: 1rem;
}

.canvas-frame {
    position: relative;
    border: 4px solid #00FFFF;
    background: #07071a;
    box-shadow:
        8px 8px 0 rgba(0, 0, 0, 0.7),
        0 0 30px rgba(0, 255, 255, 0.4);
    min-height: 360px;
}

.canvas-area {
    display: block;
    width: 100%;
    height: 100%;
    cursor: crosshair;
}

.brush-preview {
    position: absolute;
    transform: translate(-50%, -50%);
    border: 2px solid;
    border-radius: 999px;
    pointer-events: none;
    mix-blend-mode: screen;
}

.canvas-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 1px,
            transparent 1px, transparent 6px);
    mix-blend-mode: screen;
}

.canvas-hint {
    font-family: 'VT323', monospace;
    color: #BBD7FF;
    font-size: 1rem;
}

@media (max-width: 900px) {
    .tool-row {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .swatch-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .color-picker {
        flex-wrap: wrap;
    }

    .color-label {
        font-size: 0.9rem;
    }

    .canvas-frame {
        min-height: 300px;
    }
}
</style>
