<script>
	import '$lib/styles.scss';

	export let data;
	console.log(data);
</script>

<div class="app">
	<h1>What's new at d.tech?</h1>
	<main class="notes">
		{#each data.notes as note}
			<div class="note" style={`--rotation: ${Math.floor(Math.random() * 6) - 3}deg;`}>
				<h2>{note.title}</h2>
				<div class="note-content">
					{@html note.content}
				</div>
				<p class="note-bottom">{note.created}</p>
			</div>
		{/each}
	</main>
</div>