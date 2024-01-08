<script lang="ts">
	import '../../global.css';
	import p1 from '$lib/images/puzzle/1.png';
	import p2 from '$lib/images/puzzle/2.png';
	import p3 from '$lib/images/puzzle/3.png';
	import p4 from '$lib/images/puzzle/4.png';
	import p5 from '$lib/images/puzzle/5.png';
	import p6 from '$lib/images/puzzle/6.png';
	import p7 from '$lib/images/puzzle/7.png';
	import p8 from '$lib/images/puzzle/8.png';
	import p9 from '$lib/images/puzzle/9.png';

	import { questions, finalText } from '../../constants/puzzle/questions';
	import { pointerPuzzle } from '../../stores/pointer';

	const strokes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const puzzle = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
	let answers = new Array(questions.length).fill(null);
</script>

<svelte:head>
	<title>Transform Puzzle</title>
	<meta
		name="description"
		content="Transform Puzzle - это игра, в которых ты сможешь обучиться веб-технологии css-transform"
	/>
	<meta name="keywords" content="flexbox, game, css, transform" />
	<meta name="author" content="Roman Novikov" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Transform Puzzle" />
	<meta property="og:title" content="Transform Puzzle" />
	<meta
		property="og:description"
		content="Transform Puzzle - это игра, в которых ты сможешь обучиться веб-технологии css-transform"
	/>
	<meta property="og:locale" content="ru_RU" />
	<meta
		property="og:image"
		content="https://code-craft-five.vercel.app/_app/immutable/assets/dog-johnny.28c5c7ba.png"
	/>
	<meta property="og:image:width" content="968" />
	<meta property="og:image:height" content="504" />
	<link
		href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Code+Pro&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<main>
	{#if !($pointerPuzzle > answers.length - 1)}
		<div class="editor-wrapper">
			<div class="editor-logo-group">
				<h1 class="editor-logo">TRANSFORM PUZZLE</h1>
				<div class="editor-logo-arrows">
					<button
						disabled={$pointerPuzzle == 0}
						on:click={() => {
							+$pointerPuzzle--;
						}}>{'<'}</button
					>
					<p>УРОВЕНЬ</p>
					<button
						on:click={() => {
							+$pointerPuzzle++;
						}}>{'>'}</button
					>
				</div>
			</div>

			<p class="editor-text">{questions[$pointerPuzzle].content}</p>
			<div class="editor shake">
				<div class="editor-strokes">
					{#each strokes as item}
						<span>
							{item}
						</span>
					{/each}
				</div>
				<div class="editor-area">
					<p>#item <span class="bracket">{'{'}</span></p>
					<p class="margin-l red">
						<span class="blue">transition:</span> transform 1s ease-in-out;
					</p>
					<input
						class="editor-input margin-l"
						type="text"
						bind:value={questions[$pointerPuzzle].option}
					/>
					<p class="bracket">{'}'}</p>
					<button
						class="editor-button"
						on:click={() => {
							+$pointerPuzzle++;
						}}
					>
						Следующий
					</button>
				</div>
			</div>
			<span class="editor-counter">{+$pointerPuzzle + 1}/{answers.length}</span>
		</div>
	{:else}
		<div class="editor-wrapper">
			<div class="editor-logo-group">
				<h1 class="editor-logo">TRANSFORM PUZZLE</h1>
			</div>
			<p class="editor-text">
				{finalText}
			</p>
			<button
				class="editor-button"
				on:click={() => {
					$pointerPuzzle = 0;
				}}>Играть снова</button
			>
		</div>
	{/if}
	<div class="view" style={questions[$pointerPuzzle]?.viewStyle.join(';')}>
		<div class="table" id="content">
			{#if puzzle[questions[$pointerPuzzle]?.itemId]}
				<span class="img-wrapper puzzle-option" style={questions[$pointerPuzzle]?.imageStyle}>
					<img
						style={questions[$pointerPuzzle].option}
						src={puzzle[questions[$pointerPuzzle].itemId]}
						alt=""
					/>
				</span>
			{:else}
				<span />
			{/if}
		</div>
		<div class="background">
			{#each puzzle as item, idx}
				<span
					class="img-wrapper puzzle-item"
					style={idx === questions[$pointerPuzzle]?.itemId ? 'opacity: 0.2' : ''}
				>
					<img src={item} alt="" />
				</span>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		font-family: 'Press Start 2P', cursive;
		font-size: 1.4rem;
		background: #ffbe98;
	}
	button:disabled {
		opacity: 0.5;
	}
	.editor-wrapper {
		height: 100vh;
		width: 50%;
		color: white;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.editor-logo-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 3rem;
	}
	.editor-logo {
		font-size: 2.4rem;
	}
	.editor-logo-arrows {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.editor-logo-arrows button {
		border: none;
		outline: none;
		background: none;
		font-family: 'Press Start 2P', cursive;
		color: white;
		cursor: pointer;
	}

	.editor-text {
		margin-bottom: 2rem;
		line-height: 140%;
		white-space: pre-line;
	}
	.editor {
		display: flex;
		font-family: 'Source Code Pro', monospace;
		background: #2f2f2f;
		padding: 1rem;
	}

	.editor-strokes {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		color: #c3c3c3;
		padding: 1rem;
	}
	.editor-area {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		color: #f7f6bc;
		padding: 1rem 0.5rem;
		width: 100%;
		letter-spacing: 0.2rem;
		position: relative;
		margin-left: 2rem;
	}
	.editor-input {
		border: none;
		outline: none;
		height: 2rem;
		font-size: 1.6rem;
		font-family: 'Source Code Pro', monospace;
		letter-spacing: 0.2rem;
		background: #404040;
		color: white;
	}
	.editor-button {
		position: absolute;
		right: 1.5rem;
		bottom: 1.5rem;
		font-size: 1.6rem;
		padding: 1rem 1.5rem;
		border-radius: 0.5rem;
		border: none;
		color: white;
		background: #50c878;
		cursor: pointer;
		font-family: 'Source Code Pro', monospace;
	}

	.editor-counter {
		font-size: 10rem;
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		opacity: 0.2;
	}

	.view {
		height: 100vh;
		width: 50vw;
		background: #fdf4e3;
		padding: 1rem;
		gap: 2rem;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.background {
		display: grid;
		grid-gap: 3px;
		grid-template-columns: repeat(3, 10rem);
	}

	.puzzle-option {
		z-index: 99999;
	}

	.img-wrapper {
		display: block;
		position: relative;
		width: 10rem;
		height: 10rem;
	}
	.img-wrapper img {
		width: 100%;
		height: 100%;
		transition: transform 1s ease-in-out;
	}

	.margin-l {
		margin-left: 3rem;
	}
	.bracket {
		color: yellow;
	}
	.blue {
		color: #569cd6;
	}
	.red {
		color: #ce9178;
	}
	@media (max-width: 1500px) {
		.editor-counter {
			font-size: 7rem;
		}
	}
	@media (max-width: 1300px) {
		.img-wrapper {
			width: 8rem;
			height: 8rem;
		}
		.background {
			grid-template-columns: repeat(3, 8rem);
		}
		.editor-counter {
			font-size: 5rem;
		}
	}
	@media (max-width: 1000px) {
		main {
			flex-direction: column;
			font-size: 1rem;
		}
		.editor-counter {
			display: none;
		}
		.editor-wrapper {
			width: 100%;
		}
		.editor-logo {
			font-size: 1.8rem;
		}
		.view {
			width: 100%;
			gap: 1rem;
		}
		.editor-button {
			font-size: 1.2rem;
			padding: 0.5rem 1rem;
		}
		.editor,
		.editor-input {
			font-size: 1.1rem;
		}
	}
</style>
