<script lang="ts">
	import FilterListBox from './FilterListBox.svelte';
	import { enhance } from '$app/forms';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	let seasons = ['WINTER', 'SPRING', 'SUMMER', 'FALL'];
	let formats = ['TV', 'TV_SHORT', 'OVA', 'ONA', 'MOVIE', 'SPECIAL', 'MUSIC'];
	let sort = [
		'POPULARITY_DESC',
		'POPULARITY',
		'TRENDING_DESC',
		'TRENDING',
		'UPDATED_AT_DESC',
		'UPDATED_AT',
		'START_DATE_DESC',
		'START_DATE',
		'END_DATE_DESC',
		'END_DATE',
		'FAVOURITES_DESC',
		'FAVOURITES',
		'SCORE_DESC',
		'SCORE',
		'TITLE_ROMAJI_DESC',
		'TITLE_ROMAJI',
		'TITLE_ENGLISH_DESC',
		'TITLE_ENGLISH',
		'TITLE_NATIVE_DESC',
		'TITLE_NATIVE_DESC',
		'TITLE_NATIVE',
		'EPISODES_DESC',
		'EPISODES',
		'ID',
		'ID_DESC'
	];

	let genres = [
		'Action',
		'Adventure',
		'Cars',
		'Comedy',
		'Drama',
		'Fantasy',
		'Horror',
		'Mahou Shoujo',
		'Mecha',
		'Music',
		'Mystery',
		'Psychological',
		'Romance',
		'Sci-Fi',
		'Slice of Life',
		'Sports',
		'Supernatural',
		'Thriller'
	];

	let status = ['RELEASING', 'NOT_YET_RELEASED', 'FINISHED', 'CANCELLED', 'HIATUS'];
	let SelectedSeason: any;
	let selectedFormat: any;
	let selectedStatus: any;
	let SelectedGenres: never[] = [];
</script>

<section class="mt-2">
	<form action="" method="get" use:enhance>
		<div class="cont-1 flex w-full">
			<div class="seasons w-1/4 m-2">
				<label class="text-xl font-semibold m-4" for="season">Season</label>
				<FilterListBox variables={seasons} name={'season'} SelectedVar={SelectedSeason} />
			</div>
			<div class="status w-1/4 m-2">
				<label class="text-xl font-semibold m-4" for="status">Status</label>
				<FilterListBox variables={status} name={'status'} SelectedVar={selectedStatus} />
			</div>
			<div class="genre w-1/4 m-2">
				<label class="text-xl font-semibold m-4" for="genre">Genres</label>
				<FilterListBox
					variables={genres}
					is_multipe={true}
					name="genres"
					SelectedVar={SelectedGenres}
				/>
			</div>
			<div class="format w-1/4 m-2">
				<label class="text-xl font-semibold m-4" for="format">Format</label>
				<FilterListBox variables={formats} name="format" SelectedVar={selectedFormat} />
			</div>
		</div>

		<button class="btn variant-filled-surface" type="submit"> Look </button>
	</form>
</section>

<style>
</style>
