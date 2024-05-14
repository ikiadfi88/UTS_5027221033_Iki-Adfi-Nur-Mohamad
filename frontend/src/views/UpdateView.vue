<script lang="ts">
import { ref, defineComponent } from 'vue'
import axios from 'axios'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'FormPeminjaman',
  components: {
    DefaultLayout,
    DefaultCard
  },
  data() {
    return {
      id: this.$route.params.id,
      inputNewNama: '',
      inputNewKeperluan: '',
      inputNewTanggalpinjam: '',
      inputNewTanggalkembali: '',
      inputNewAlat: '',
      inputNewNohp: '',
      inputNewStatus: ''
    }
  },
  methods: {
    async getPeminjamanById() {
      // Mengambil data peminjaman dari server
      const peminjaman = await this.fetchPeminjamanById(this.id)
      if (peminjaman) {
        this.inputNewNama = peminjaman.nama
        this.inputNewKeperluan = peminjaman.keperluan
        this.inputNewTanggalpinjam = peminjaman.tanggalpinjam
        this.inputNewTanggalkembali = peminjaman.tanggalkembali
        this.inputNewAlat = peminjaman.alat
        this.inputNewNohp = peminjaman.nohp
        this.inputNewStatus = peminjaman.status
      }
    },
    async fetchPeminjamanById(id: string | string[]) {
      try {
        const response = await axios.get(`http://localhost:3000/peminjamans/${id}`)
        return response.data
      } catch (error) {
        console.error('Error fetching peminjaman: ', error)
        return null
      }
    },
    async updatePeminjaman() {
      const updatedPeminjaman = {
        id: this.id,
        nama: this.inputNewNama,
        keperluan: this.inputNewKeperluan,
        tanggalpinjam: this.inputNewTanggalpinjam,
        tanggalkembali: this.inputNewTanggalkembali,
        alat: this.inputNewAlat,
        nohp: this.inputNewNohp,
        status: this.inputNewStatus
      }

      try {
        await axios.put(`http://localhost:3000/peminjamans/${this.id}`, updatedPeminjaman)
        this.$router.push('/')
      } catch (error) {
        console.error('Error updating data: ', error)
      }
    }
  },
  async mounted() {
    await this.getPeminjamanById()
  }
}
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <!-- <BreadcrumbDefault :pageTitle="pageTitle" /> -->
    <!-- Breadcrumb End -->

    <!-- ====== Form Layout Section Start -->
    <div class="">
      <div class="flex flex-col gap-9">
        <!-- Contact Form Start -->
        <DefaultCard cardTitle="Isi data dengan Benar">
          <div class="p-6.5">
            <div class="mb-5">
              <label class="mb-3 block text-black dark:text-white"> Nama Peminjam </label>
              <input
                type="text"
                v-model="inputNewNama"
                placeholder="Masukkan Nama"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-black dark:text-white"> Keperluan </label>
              <input
                type="text"
                v-model="inputNewKeperluan"
                placeholder="Tulis Keperluan"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-black dark:text-white"> Tanggal Pengambilan </label>
              <input
                type="date"
                v-model="inputNewTanggalpinjam"
                placeholder="Masukkan Nama"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary cursor-pointer disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-black dark:text-white"> Tanggal Pengembalian </label>
              <input
                type="date"
                v-model="inputNewTanggalkembali"
                placeholder="Masukkan Nama"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary cursor-pointer disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-black dark:text-white"> Jenis Alat </label>
              <input
                type="text area"
                v-model="inputNewAlat"
                placeholder="Masukkan Alat yang dipinjam"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-black dark:text-white"> No Handphone </label>
              <input
                type="number"
                v-model="inputNewNohp"
                placeholder="Masukkan Nomor yang Bisa dihubungi"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-black dark:text-white"> Status </label>
              <input
                type="text"
                v-model="inputNewStatus"
                placeholder="Ketik Keluar (untuk pengambilan)/ Masuk (untuk pengembalian)"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button
              @click="updatePeminjaman"
              class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            >
              Kirim
            </button>
          </div>
        </DefaultCard>
        <!-- Contact Form End -->
      </div>
    </div>
    <!-- ====== Form Layout Section End -->
  </DefaultLayout>
</template>
