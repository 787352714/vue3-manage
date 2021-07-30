<!--
 * @Author: your name
 * @Date: 2021-07-27 15:24:49
 * @LastEditTime: 2021-07-28 18:14:02
 * @LastEditors: Please set LastEditors
 * @Description: icon
-->
<template>
    <div class="icon-with-svg-or-image">
        <svg class="icon" :width="width" :height="height" aria-hidden="true" v-if="iconName">
            <use :xlink:href="svgName"></use>
        </svg>
        <img v-else :src="imageUrl" :style="{width:width,height:height}" alt="">
    </div>
</template>
<script>
import { computed } from 'vue'

export default {
    name:"icon-with-svg-or-image",
    props:{
        iconName:{
            type:String,
            default:''
        },
        imageUrl:{
            type:String,
            default:''
        },
        iconWidth:{
            type:[String, Number],
            default:60
        },
        iconHeight:{
            type:[String, Number],
            default:60
        }
    },
    setup(props) {
        const svgName = computed(()=>`#icon-${props.iconName}`);
        const width = computed(()=>typeof props.iconWidth === 'string'?props.iconWidth:props.iconWidth+'px');
        const height = computed(()=>typeof props.iconHeight === 'string'?props.iconHeight:props.iconHeight+'px')
        return {
            svgName,
            height,
            width
        }
    }
}
</script>
<style lang="scss">
    
</style>