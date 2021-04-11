<script>
// import topListItemTemplate from '../components/topListItemTemplate'
import $ from 'jquery'

export default {
  data () {
    return {
      sort: [],
      unsort: [
        {
          id: '1',
          title: '圖片1',
          num: 1
        },
        {
          id: '2',
          title: '圖片2',
          num: 2
        },
        {
          id: '3',
          title: '圖片3',
          num: 3
        }
      ],
      MIN_INDEX: 1,
      MAX_INDEX: 5
    }
  },
  computed: {},
  methods: {
    addSort (event) {
      const $target = $(event.target)
      if ($target.prop('tagName') === 'BUTTON') {
        const indexs = this.getIndexs()
        console.log(indexs)
      }
    },
    getIndexs: () => {
      const $toppingList = $('#toppingList')
      const $toppingListTbody = $toppingList.find('tbody')
      const $rowInputs = $toppingListTbody.find('input[name="index[]"]')
      return Array.from($rowInputs)
        .map(function (rowEl) {
          return parseInt(rowEl.value) // 回傳input裡面的value
        })
        .filter(function (index) {
          return !isNaN(index) // 把不是NaN的值過濾出來(為什麼要再過濾這個?)
        })
    },
    // *
    // 驗證長度
    // *
    verifyTopping (indexs, index) {
      if (index === undefined) {
        if (indexs.length >= this.MAX_INDEX) {
          return false
        }
        return true
      }
      if (index < this.MIN_INDEX || index > this.MAX_INDEX) {
        return false
      }
      return true
    }
  }
  // components: {
  //   topListItemTemplate
  // }
}
</script>

<template>
  <section>
    <div class="container-fluid pb-4 mt-3">
      <div class="row">
        <div class="col-12 col-md-8 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title h5">置頂排序中 (5 筆)</h5>
            </div>
            <div class="card-body">
              <table id="toppingList" class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>順位</th>
                    <th>標題</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(article, index) in sort" :key="index">
                    <td>
                      <input
                        type="text"
                        class="form-control"
                        style="width: 2.5em"
                        name="index[]"
                        value=""
                      />
                      <!-- <input type="hidden" name="隱藏欄位名稱" value="隱藏欄位值"> -->
                      <!-- <input type="hidden" name="id[]" value="" /> -->
                    </td>
                    <td>{{ article.title }}</td>
                    <td>
                      <button type="button" class="btn btn-secondary">
                        取消排序
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer text-right">
              <button type="submit" class="btn btn-success">儲存</button>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-4" />

      <div class="row">
        <div class="col-12 col-md-8 col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title h5">未排序</h5>
            </div>

            <div class="card-body">
              <table id="topList" class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>標題</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(article, index) in unsort" :key="index">
                    <td>{{ article.title }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary"
                        :data-id="article.id"
                        :data-title="article.title"
                        @click="addSort"
                      >
                        加入排序
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
