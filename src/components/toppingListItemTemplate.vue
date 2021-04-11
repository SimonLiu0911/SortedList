<template>
  <div id="toppingListItemTemplate" type="text/html">
    <tr>
      <td>
        <input
          type="text"
          class="form-control"
          style="width: 2.5em"
          name="index[]"
        />
        <input type="hidden" name="id[]" value="" />
      </td>
      <td>title</td>
      <td>
        <button
          type="button"
          class="btn btn-secondary"
          data-id=""
          data-title=""
        >
          取消排序
        </button>
      </td>
    </tr>
  </div>
</template>
