<script>
export default {
  data () {
    return {
      newData: '',
      unsortedData: ['a', 'b', 'c', 'd'],
      sortedData: []
    }
  },
  computed: {
    dataSet () {
      return 1
    }
  },
  methods: {
    onClickAddNewData () {
      if (this.newData === '') return
      this.unsortedData.push(this.newData)
      this.newData = ''
    },
    onClickSortedData (data, index) {
      this.sortedData.push(data)
      // this.unsortedData.splice(index, 1)
      this.unsortedData = this.unsortedData.filter(function (item) {
        return item !== data
      })
    },
    confirmSort () {
      const orderWrapper = document.querySelectorAll('.orderWrapper')
      const inputDOM = document.querySelectorAll('.orderInput')
      const testArr = []
      for (let i = 0; i < this.sortedData.length; i++) {
        if (inputDOM[i].value === '') {
          console.log('return')
          return
        }
      }
      for (let i = 0; i < this.sortedData.length; i++) {
        orderWrapper[i].dataset.key = inputDOM[i].value
        testArr.push(this.sortedData[orderWrapper[i].dataset.key - 1])
        inputDOM[i].value = ''
      }
      this.sortedData = testArr
    }
  }
}
</script>

<template>
  <section>
    <div class="sortedBlcok">
      <button @click="confirmSort">確認排序</button>
      <table>
        <thead>
          <tr>
            <th>order</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          <tr class="orderWrapper" v-for="(data, index) in sortedData" :key="index" :data-key="index + 1">
            <td>
              <input class="orderInput" type="text" :data-index="index" :placeholder="(index + 1)">
            </td>
            <td>{{ data }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <div class="inputNewOne">
      <input type="text" v-model="newData" />
      <button @click="onClickAddNewData">新增</button>
    </div>
    <div class="unsortedBlcok">
      <table>
        <thead>
          <tr>
            <th>order</th>
            <th>name</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in unsortedData" :key="index">
            <td :data-index="index">{{ index + 1 }}</td>
            <td>{{ data }}</td>
            <td>
              <button @click="onClickSortedData(data, index)">加入排序</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
