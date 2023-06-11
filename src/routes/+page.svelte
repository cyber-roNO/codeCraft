<script>
	import '../global.css';
	import dogStart from '$lib/images/dog-start.png';
	import dogHouse from '$lib/images/doghouse.png';
	let option = '';
	let strokes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
</script>

<svelte:head>
	<title>codeCraft</title>
	<meta name="description" content="codeCraft app" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Source+Code+Pro&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<main>
	<div class="editor-wrapper">
		<p>
			Help all three frogs find their lilypads just by using justify-content. This time, the
			lilypads have lots of space all around them.
		</p>
		<div class="editor">
			<div class="editor-strokes">
				{#each strokes as item}
					<span>
						{item}
					</span>
				{/each}
			</div>
			<div class="editor-area">
				<p>#content <span class="bracket">{'{'}</span></p>
				<p class="margin-l red"><span class="blue">display:</span> flex;</p>
				<input class="editor-input margin-l" type="text" bind:value={option} />
				<p class="bracket">{'}'}</p>
				<button class="editor-button">Next</button>
			</div>
		</div>
	</div>
	<div class="view">
		<div class="background">
			<span class="img-wrapper doggy-house"><img src={dogHouse} alt="doggy-house" /></span>
		</div>
		<div class="grass" style={option} id="content">
			<span class="img-wrapper doggy"><img src={dogStart} alt="doggy" /></span>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		font-family: 'Montserrat', sans-serif;
		font-size: 1.6rem;
	}
	.editor-wrapper {
		height: 100vh;
		width: 50%;
		color: white;
		padding: 2rem;
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
		background: #2f2f2f;
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
		background: #489d48;
		cursor: pointer;
		font-family: 'Source Code Pro', monospace;
	}
	.view {
		height: 100vh;
		width: 50vw;
		background: #489d48;
		position: relative;
	}
	.background,
	.grass {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 1em;
	}
	.background {
		z-index: 10;
		justify-content: center;
		align-items: center;
	}
	.grass {
		z-index: 20;
	}
	.img-wrapper {
		display: block;
		position: relative;
		width: 20rem;
		height: 20rem;
	}
	.img-wrapper img {
		width: 100%;
		height: 100%;
	}
	.doggy {
		width: 20rem;
		height: 20rem;
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
</style>
