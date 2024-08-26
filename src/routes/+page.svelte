<script>
	import '$lib/styles.scss';

	export let data;
</script>

<div class="app">
	<h1 class="title">What's new at d.tech?</h1>
	<main class="notes">
		{#each data.notes as note}
			<div class={`note ${note.color}`} style={`--rotation: ${Math.floor(Math.random() * 6) - 3}deg;`}>
				<h2 class="note-title">{note.title}</h2>
				<div class="note-content">
					{@html note.content}
				</div>
				<p class="note-bottom">{note.created}</p>
			</div>
		{/each}
	</main>
	<div class="marquee">
		<div class="marquee-section">
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
		</div>
		<div class="marquee-section">
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
		</div>
	</div>
	<div class="marquee">
		<div class="marquee-section">
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
		</div>
		<div class="marquee-section">
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
		</div>
	</div>
	<div class="marquee">
		<div class="marquee-section">
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
		</div>
		<div class="marquee-section">
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
			<p>GO DRAGONS!</p>
		</div>
	</div>
	<img class="br-image" alt="bottom right" src="dtech-logo.svg"/>
</div>