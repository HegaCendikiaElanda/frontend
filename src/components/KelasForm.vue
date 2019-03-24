<template>
	<div>
		<form @submit.prevent="kelasForm">
			<center>
				<table border="1">
					<tr>
						<td><label for="">Nama Kelas</label></td>
						<td><input type="text" v-model="kelas.nama_kelas"></td>
					</tr>
					<tr>
						<td><label for="">Jurusan</label></td>
						<td><input type="text" v-model="kelas.jurusan"></td>
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
		name: 'KelasForm',
		data() {
			return {
				kelas: {
					id: null,
					nama_kelas: '',
					jurusan: '',
				}
			}
		},
		mounted() {
			let id = this.$route.params.id

			if (id) {
				api.get('/kelas/' + id).then(res =>{
					this.kelas = res.data.result
					console.log(this.kelas)
				})
			}
		},
		methods: {
			kelasForm() {
				let data = this.kelas
				let url = 'kelas'

				if (this.kelas.id) {
					url += '/' + this.kelas.id
				}

				api.post(url, data).then(res => {
					if (res.data.status === 'success') {
						this.$router.push('/kelas')
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