<template>
	<div>
		<form @submit.prevent="siswaForm">
			<center>
				<table border="1">
					<tr>
						<td><label for="">NIS</label></td>
						<td><input type="text" v-model="siswa.nis"></td>
					</tr>
					<tr>
						<td><label for="">Nama</label></td>
						<td><input type="text" v-model="siswa.nama_lengkap"></td>
					</tr>
					<tr>
						<td><label for="">Jenis Kelamin</label></td>
						<td>
							<select v-model="siswa.jenis_kelamin">
								<option value="">Pilih Jenis Kelamin</option>
								<option value="L">Laki - Laki</option>
								<option value="P">Perempuan</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><label for="">Alamat</label></td>
						<td><textarea v-model="siswa.alamat"></textarea></td>
					</tr>
					<tr>
						<td colspan="2">
							<button type="submit">Save</button>
						</td>
					</tr>
				</table>
			</center>
		</form>
	</div>
</template>

<script>
	import { api } from '@/helper/api'

	export default {
		name: 'SiswaForm',
		data() {
			return {
				siswa: {
					id: null,
					nis: '',
					nama_lengkap: '',
					jenis_kelamin: '',
					alamat: ''
				}
			}
		},
		mounted() {
			let id = this.$route.params.id

			if (id) {
				api.get('/siswa/' + id).then(res =>{
					this.siswa = res.data.result
					console.log(this.siswa)
				})
			}
		},
		methods: {
			siswaForm() {
				let data = this.siswa
				let url = 'siswa'

				if (this.siswa.id) {
					url += '/' + this.siswa.id
				}

				api.post(url, data).then(res => {
					if (res.data.status === 'success') {
						this.$router.push('/siswa')
					} else {
						console.log(res.data.message)
					}
				}).catch(err =>{
					console.log(err)
				})
			}
		}
	}
</script>