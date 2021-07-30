<!--
 * @Author: zj
 * @Date: 2021-07-27 19:50:41
 * @LastEditTime: 2021-07-30 10:17:51
 * @LastEditors: Please set LastEditors
 * @Description: subMenu
-->
<script>
export default {
    name:'SubMenu',
    props:{
        menuList:{
            type:Array,
            defualt:()=>[]
        }
    },
    setup(props) {
        return ()=>props.menuList.map(item=>(
            <>
                {item.children?
                    (<el-submenu key={item.id} vSlots={{title:()=><>{item.name}</>}} index={item.id}>
                        <SubMenu menuList={item.children} />
                    </el-submenu>)
                    :
                    (<el-menu-item key={item.id} index={item.id} >
                        <router-link to={item.path} exact-active-class="exact-active-class" active-class="active-class">{item.name}</router-link>
                    </el-menu-item>)}
            </>
        ))
    }

}
</script>
<style lang="scss">
    .active-class,.exact-active-class{
        color:#909399;
        background-color: #fff;
        height: 36px;
        line-height: 36px;
    }
</style>