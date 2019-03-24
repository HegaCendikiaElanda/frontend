<template>
	<div>
		<h1>Data Kelas</h1>
		<br>
		<router-link to="/kelas/create">Add Data</router-link>
		<center>
			<table border="1">
				<tr>
					<th>No</th>
					<th>Nama Kelas</th>
					<th>Jurusan</th>
					<th>Action</th>
				</tr>
				<tr v-for="(kelas,i) in data_kelas" :key="i" >
					<td>{{i+1}}</td>
					<td>{{kelas.nama_kelas}}</td>
					<td>{{kelas.jurusan}}</td>
					<td>
						<router-link :to="'/kelas/'+kelas.id">Edit</router-link>
						<button @click="deleteRow(kelas.id)">Delete</button>
					</td>
				</tr>
			</table>
		</center>
	</div>
</template>

<script>
	import {api} from '@/helper/api'

	export default{
		name:'Kelas',
		data(){
			return{
				data_kelas: []
			}
		},
		mounted(){
			this.get()
		},
		methods: {
			get(){
				api.get('kelas').then(res => {
					if (res.data.status === 'success') {
						this.data_kelas = res.data.result
					}else{
						console.log(res.data.message)
					}
				}).catch(err =>{
					console.log(err)
				})
			}
		},
		deleteRow (id){
			api.delete('kelas/' + id).then(res =>{
				if (res.data.status === 'success') {
					this.get()
				}else{
					console.log(res.data.message)
				}
			}).catch(err =>{
				console.log(err)
			})
		}
	}
</script>