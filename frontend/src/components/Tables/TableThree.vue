<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Peminjaman {
  nama: string
  keperluan: string
  tanggalpinjam: string
  tanggalkembali: string
  alat: string
  nohp: string
  status: string
}

const peminjamans = ref<Peminjaman[]>([])

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/peminjamans')
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()
    peminjamans.value = data
    console.log(data) // Tambahkan console.log disini
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
  >
    <div class="max-w-full overflow-x-auto">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-2 text-left dark:bg-meta-4">
            <th class="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              Nama Peminjam
            </th>
            <th class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
              Keperluan
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
              Tanggal Peminjaman
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
              Tanggal Pengembalian
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
              Nama Alat
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
              No Handphone
            </th>
            <th class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Status</th>
            <th class="py-4 px-4 font-medium text-black dark:text-white">Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(peminjaman, index) in peminjamans" :key="index">
            <td class="py-5 px-4 pl-9 xl:pl-11">
              <p class="text-sm">{{ peminjaman.nama }}</p>
            </td>
            <td class="py-5 px-4 pl-9 xl:pl-11">
              <p class="text-sm">{{ peminjaman.keperluan }}</p>
            </td>
            <td class="py-5 px-4 pl-9 xl:pl-11">
              <p class="text-sm">{{ peminjaman.tanggalpinjam }}</p>
            </td>
            <td class="py-5 px-4 pl-9 xl:pl-11">
              <p class="text-sm">{{ peminjaman.tanggalkembali }}</p>
            </td>
            <td class="py-5 px-4 pl-9 xl:pl-11">
              <p class="text-sm">{{ peminjaman.alat }}</p>
            </td>
            <td class="py-5 px-4 pl-9 xl:pl-11">
              <p class="text-sm">{{ peminjaman.nohp }}</p>
            </td>
            <td class="py-5 px-4">
              <p
                class="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium"
                :class="{
                  'bg-danger text-danger': peminjaman.status === 'Keluar',
                  'bg-success text-success': peminjaman.status === 'Masuk'
                }"
              >
                {{ peminjaman.status }}
              </p>
            </td>
            <td class="py-5 px-4">
              <div class="flex items-center space-x-3.5">
                <!-- Button Edit -->
                <button class="hover:text-primary">
                  <!-- SVG untuk tombol edit -->
                </button>

                <!-- Button Delete -->
                <button class="hover:text-primary">
                  <!-- SVG untuk tombol delete -->
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
