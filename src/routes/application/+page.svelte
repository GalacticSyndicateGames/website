<script lang="ts">
	import { base } from '$app/paths';
  import {onDestroy, onMount} from "svelte"

</script>

<section
	class="pt-headerHeight px-wrapper flex h-screen w-full  items-start justify-center bg-evenDarkerNavy bg-cover bg-no-repeat md:items-center md:justify-end md:pt-0 "
>
	<div class="w-full max-w-screen-md  text-white space-y-4">
		<h1 class="w-full text-left font-aldrich text-4xl xl:text-6xl">Apply</h1>

		<form action="" class="flex flex-col items-center justify-start gap-y-3">
			<div class="w-full">
				<label for="first-name"  class="block text-base font-medium leading-6 font-anonymous">First Name</label>
				<input
					type="text"
					name="first-name"
					id="first-name"
					class="block mt-2 w-full rounded-md  p-2 bg-darkNavy text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-darkNavy sm:text-sm sm:leading-6 md:text-base"
				/>
			</div>

			<div class="w-full">
				<label for="last-name"  class="block text-base font-medium leading-6  font-anonymous">Last Name</label>
				<input
					type="text"
					name="last-name"
					id="last-name"
					class="block mt-2 w-full rounded-md  p-2 bg-darkNavy text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-darkNavy sm:text-sm sm:leading-6 md:text-base"
				/>
			</div>

			<div class="w-full">
				<label for="email"  class="block text-base font-medium leading-6  font-anonymous">Email</label>
				<input
          autocomplete="email"
					type="email"
					name="email"
					id="email"
					class="block mt-2 w-full rounded-md  p-2 bg-darkNavy text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-darkNavy sm:text-sm sm:leading-6 md:text-base"
				/>
			</div>

			<div class="w-full">
				<label for="position"  class="block text-base font-medium leading-6  font-anonymous">Position</label>
				<select
					name="position"
					id="position"
					class="block mt-2 w-full rounded-md  p-2 bg-darkNavy text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-darkNavy sm:text-sm sm:leading-6 md:text-base"
				>
          <option>First Postition</option>
          <option>Second Postition</option>
          <option>Third Postition</option>
        </select>
			</div>


			<div class="w-full">
				<label for="resume-or-linkedin"  class="block text-base font-medium leading-6  font-anonymous">LinkedIn/Resume link</label>
				<input
					type="text"
					name="resume-or-linkedin"
					id="resume-or-linkedin"
					class="block mt-2 w-full rounded-md  p-2 bg-darkNavy text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-darkNavy sm:text-sm sm:leading-6 md:text-base"
				/>
			</div>

			<div class="w-full">
				<label for="extra-message"  class="block text-base font-medium leading-6  font-anonymous">Anything You&apos;d like to add?</label>
				<textarea
					name="extra-message"
					id="extra-message"
          rows="4"
					class="block mt-2 w-full rounded-md  p-2 bg-darkNavy text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-darkNavy sm:text-sm sm:leading-6 md:text-base"
				/>
			</div>

      <button type="submit" class="rounded-full mt-4 px-12 py-2 text-xl font-aldrich border-2 border-white">
        Apply
      </button>
		</form>
	</div>
</section>
