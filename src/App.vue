<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :width="1800"
    :height="1100"
    fixed
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import {
  ElButton,
  ElIcon,
  ElTag,
  ElTooltip,
  TableV2FixedDir,
} from 'element-plus';
import { Timer } from '@element-plus/icons-vue';

import type { Column } from 'element-plus';

let id = 0;

const dataGenerator = () => ({
  id: `random-id-${++id}`,
  name: 'Tom',
  date: '2020-10-1',
});

const fakeColumns = new Array(10).fill(null).map((_) => ({
  key: 'name',
  title: 'Name',
  dataKey: 'name',
  width: 150,
  align: 'center',
  cellRenderer: ({ cellData: name }) => <ElTag>{name}</ElTag>,
}));

const columns: Column<any>[] = [
  {
    key: 'date',
    title: 'Date',
    dataKey: 'date',
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: date }) => (
      <ElTooltip content={dayjs(date).format('YYYY/MM/DD')}>
        {
          <span class='flex items-center'>
            <ElIcon class='mr-3'>
              <Timer />
            </ElIcon>
            {dayjs(date).format('YYYY/MM/DD')}
          </span>
        }
      </ElTooltip>
    ),
  },
  ...fakeColumns,
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <ElButton size='small'>Edit</ElButton>
        <ElButton size='small' type='danger'>
          Delete
        </ElButton>
      </>
    ),
    width: 150,
    align: 'center',
  },
];

const data = ref(Array.from({ length: 200 }).map(dataGenerator));
</script>
