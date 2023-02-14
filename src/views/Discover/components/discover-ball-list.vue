<script>
export default {
    name: "DiscoverBallList",
    render() {
        const items = this.$slots.default()
        const childrenNode = []
        const date = new Date().getDate()
        items[0].children.forEach((item,i )=> {
            if(i < 1) {
                item.children.push((<i class='date'>{date}</i>))
            }
                childrenNode.push(item)
        });
        return (
            <div id="container">
                <div  class="ball-list">
                    {childrenNode}
                </div>
            </div>
        )
    }
}
</script>
<style lang="less" scoped>
#container {
    width: 100vw;
    scroll-behavior: smooth;
    overflow-x: scroll;
    height: 60px;

    .ball-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 200vw;
        background-color: rgb(255, 255, 255);
        height: 60px;
      .date{
        position: absolute;
        top:2.3px;
        margin-right: 0.2px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        transform: scale(0.8);
        color: rgb(255, 255, 255);
      }
    }
}
</style>