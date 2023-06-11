<script>
	import '../global.css';
	import dogStart from '$lib/images/dog-start.png';
	import dogHouse from '$lib/images/doghouse.png';
	let result = '';
	let result2 = '';
</script>

<svelte:head>
	<title>codeCraft</title>
	<meta name="description" content="codeCraft app" />
</svelte:head>
<main>
	<div class="editor">
		<input type="text" bind:value={result} />
		<input type="text" bind:value={result2} />
	</div>
	<div class="view">
		<div class="background">
			<span class="img-wrapper doggy-house"><img src={dogHouse} alt="doggy-house" /></span>
		</div>
		<div class="grass" style="{result};{result2}">
			<span class="img-wrapper doggy"><img src={dogStart} alt="doggy" /></span>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
	}
	.editor {
		height: 100vh;
		width: 50%;
	}
	.view {
		height: 100vh;
		width: 50vw;
		background: #9acd32;
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
</style>
