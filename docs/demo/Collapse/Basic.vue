<template>
  <div class="basic block">
    <v-collapse v-model="openedValue">
      <v-collapse-item name="a" title="标题1">
        <div>
          自过年以来，都习惯了他每天在家做饭，虽然偶尔会有些碎碎念，偶尔会有些觉得一直待在家里不是件好事，可是，今天，突然被告知要去上班了。还是很不习惯的`。虽然一天做了好几顿饭，可是还是感觉肚子有些饿。乱七八糟的不知道吃了些什么，又感觉吃什么都没食欲。看来，还是和他说的，离开了他的生活，我一定会感到不习惯的。
        </div>
      </v-collapse-item>
      <v-collapse-item name="b" title="标题2">
        <div>
          自过年以来，都习惯了他每天在家做饭，虽然偶尔会有些碎碎念，偶尔会有些觉得一直待在家里不是件好事，可是，今天，突然被告知要去上班了。还是很不习惯的`。虽然一天做了好几顿饭，可是还是感觉肚子有些饿。乱七八糟的不知道吃了些什么，又感觉吃什么都没食欲。看来，还是和他说的，离开了他的生活，我一定会感到不习惯的。
        </div>
      </v-collapse-item>
      <v-collapse-item name="b" title="标题3-禁用" disabled>
        <div>
          自过年以来，都习惯了他每天在家做饭，虽然偶尔会有些碎碎念，偶尔会有些觉得一直待在家里不是件好事，可是，今天，突然被告知要去上班了。还是很不习惯的`。虽然一天做了好几顿饭，可是还是感觉肚子有些饿。乱七八糟的不知道吃了些什么，又感觉吃什么都没食欲。看来，还是和他说的，离开了他的生活，我一定会感到不习惯的。
        </div>
      </v-collapse-item>
    </v-collapse>
  </div>
</template>

<script setup>
import { ref } from "vue";
const openedValue = ref(["a"]);
</script>
