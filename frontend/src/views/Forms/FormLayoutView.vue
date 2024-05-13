<script lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import InputGroup from '@/components/Forms/InputGroup.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import flatpickr from 'flatpickr'
import { onMounted, ref, defineComponent } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios'

export default defineComponent({
  name: 'FormPeminjaman',
  components: {
    DefaultLayout,
    BreadcrumbDefault,
    DefaultCard,
    InputGroup
  },
  setup() {
    const formData = ref({
      nama: '',
      keperluan: '',
      tanggalpinjam: '',
      tanggalkembali: '',
      nohp: ''
    })

    const submitForm = async () => {
      const res = await axios.post('http://localhost:3000/peminjamans', formData.value)
      if (res.data.success) {
        // Tampilkan pesan sukses atau lakukan tindakan lain
      } else {
        // Tampilkan pesan error atau lakukan tindakan lain
      }
    }

    return {
      pageTitle: 'Form Peminjaman', // Sesuaikan dengan judul halaman Anda
      formData,
      submitForm
    }
  }
})
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <!-- ====== Form Layout Section Start -->
    <div class="">
      <div class="flex flex-col gap-9">
        <!-- Contact Form Start -->
        <DefaultCard cardTitle="Contact Form">
          <form @submit.prevent="submitForm">
            <div class="p-6.5">
              <InputGroup
                v-model="formData.nama"
                label="Nama Peminjam"
                type="text"
                placeholder="Masukkan Nama Peminjam"
                customClasses="mb-4.5"
                required
              />

              <InputGroup
                v-model="formData.keperluan"
                label="Keperluan"
                type="text"
                placeholder="Masukkan Keperluan"
                customClasses="mb-4.5"
                required
              />

              <div>
                <label class="mb-3 block text-black dark:text-white"> Tanggal Peminjaman</label>
                <div class="relative">
                  <input
                    v-model="formData.tanggalpinjam"
                    class="datepicker w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    placeholder="mm/dd/yyyy"
                    data-class="flatpickr-right"
                    required
                  />

                  <div
                    class="pointer-events-none absolute inset-0 right-5 left-auto flex items-center"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <!-- Icon for calendar -->
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <label class="mb-3 block text-black dark:text-white"> Tanggal Pengembalian</label>
                <div class="relative">
                  <input
                    v-model="formData.tanggalkembali"
                    class="datepicker w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    placeholder="mm/dd/yyyy"
                    data-class="flatpickr-right"
                    required
                  />

                  <div
                    class="pointer-events-none absolute inset-0 right-5 left-auto flex items-center"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <!-- Icon for calendar -->
                    </svg>
                  </div>
                </div>
              </div>

              <InputGroup
                v-model="formData.nohp"
                label="No Handphone"
                type="text"
                placeholder="Masukkan No Handphone"
                customClasses="mb-4.5"
                required
              />

              <button
                type="submit"
                class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Kirim
              </button>
            </div>
          </form>
        </DefaultCard>
        <!-- Contact Form End -->
      </div>
    </div>
    <!-- ====== Form Layout Section End -->
  </DefaultLayout>
</template>
