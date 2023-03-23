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
	<form action="" method="get">
		<div class="mx-2">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="text-xl font-semibold ml-4 m-2"> Search </label>
			<input name="query" placeholder="Search Keyword" class="input  my-2" type="text" />
		</div>
		<div class="cont-1 hidden lg:flex  w-full">
			<div class="seasons bg-surface-500 p-2 rounded-2xl w-1/4 m-2">
				<label class="text-xl font-semibold m-4" for="season">Season</label>
				<FilterListBox variables={seasons} name={'season'} SelectedVar={SelectedSeason} />
			</div>
			<div class="status bg-surface-500 p-2 rounded-2xl w-1/4 m-2">
				<label class="text-xl font-semibold m-4" for="status">Status</label>
				<FilterListBox variables={status} name={'status'} SelectedVar={selectedStatus} />
			</div>
			<div class="genre bg-surface-500 p-2 rounded-2xl w-1/4 m-2">
				<label class="text-xl font-semibold m-4" for="genre">Genres</label>
				<FilterListBox
					variables={genres}
					is_multipe={true}
					name="genre"
					SelectedVar={SelectedGenres}
				/>
			</div>
			<div class="format bg-surface-500 p-2 rounded-2xl w-1/4 m-2">
				<label class="text-xl font-semibold m-4" for="format">Format</label>
				<FilterListBox variables={formats} name="format" SelectedVar={selectedFormat} />
			</div>
		</div>

		<div class="cont-2 w-full flex gap-x-2 lg:hidden">
			<div class="w-1/2">
				<div class="seasons bg-surface-500 p-2 rounded-2xl my-2 w-full ">
					<label class="text-xl font-semibold m-4" for="season">Season</label>
					<FilterListBox
						height={'h-36'}
						variables={seasons}
						name={'season'}
						SelectedVar={SelectedSeason}
					/>
				</div>
				<div class="status bg-surface-500 p-2 rounded-2xl my-2 w-full ">
					<label class="text-xl font-semibold m-4" for="status">Status</label>
					<FilterListBox
						height={'h-36'}
						variables={status}
						name={'status'}
						SelectedVar={selectedStatus}
					/>
				</div>
			</div>
			<div class="w-1/2">
				<div class="genre bg-surface-500 p-2 rounded-2xl my-2 w-full">
					<label class="text-xl font-semibold m-4" for="genre">Genres</label>
					<FilterListBox
						height={'h-36'}
						variables={genres}
						is_multipe={true}
						name="genre"
						SelectedVar={SelectedGenres}
					/>
				</div>
				<div class="format bg-surface-500 p-2 rounded-2xl my-2 w-full ">
					<label class="text-xl font-semibold m-4" for="format">Format</label>
					<FilterListBox
						height={'h-36'}
						variables={formats}
						name="format"
						SelectedVar={selectedFormat}
					/>
				</div>
			</div>
		</div>
		<div class="w-full flex justify-center items-center">
			<button class="btn variant-ghost-surface text-lg font-semibold p-2 m-2" type="submit">
				Filter Animes
			</button>
		</div>
	</form>
</section>

<style>
</style>
