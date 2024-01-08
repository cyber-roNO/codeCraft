<script lang="ts">
	import '../global.css';
	import Johnny from '$lib/images/dogs/dog-johnny.png';
	import Puzzle from '$lib/images/puzzle/full.png';
</script>

<svelte:head>
	<title>CodeCraft</title>
	<meta
		name="description"
		content="CodeCraft - это сборник игр, в которых ты сможешь обучиться веб-технологиям"
	/>
	<meta name="keywords" content="flexbox, game, css, transform" />
	<meta name="author" content="Roman Novikov" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="CODE CRAFT" />
	<meta property="og:title" content="CODE CRAFT" />
	<meta
		property="og:description"
		content="CodeCraft - это сборник игр, в которых ты сможешь обучиться веб-технологиям"
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
	<div class="editor-wrapper">
		<div class="editor-logo-group">
			<h1 class="editor-logo">CODECRAFT</h1>
		</div>
		<div class="cards-wrapper">
			<a class="card" style="background: #50c878" href="/help-johnny">
				<p>Help Johnny</p>
				<figure>
					<img src={Johnny} alt="" />
				</figure>
				<p>Help Johnny</p>
			</a>
			<a class="card" style="background: #ffbe98" href="/transform-puzzle">
				<p>Transform Puzzle</p>
				<figure>
					<img src={Puzzle} alt="" />
				</figure>
				<p>Transform Puzzle</p>
			</a>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		font-family: 'Press Start 2P', cursive;
		font-size: 1.4rem;
		background: #fdf4e3;
	}
	.editor-wrapper {
		height: 100vh;
		width: 100%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.editor-logo-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 5rem;
	}
	.editor-logo {
		font-size: 2.4rem;
	}

	.cards-wrapper {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(2, 28rem);
	}
	.card {
		padding: 1rem;
		width: 28rem;
		height: 28rem;
		position: relative;
		text-decoration: none;
		color: white;
		text-align: center;
		font-size: 1.6rem;
		text-transform: uppercase;
		transition: transform 0.2s ease-in-out;
	}
	.card:hover {
		transform: scale(1.1);
	}
	.card figure {
		padding: 2rem;
	}
	.card img {
		width: 80%;
	}

	@media (max-width: 1000px) {
		.cards-wrapper {
			grid-template-columns: repeat(1, 28rem);
		}
	}
</style>
