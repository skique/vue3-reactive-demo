import { defineComponent, reactive, ref, toRefs } from 'vue'

const Demo = defineComponent({
  name: 'demo',
  props: {
    msg: {
      type: Object,
      required:false,
      default: "",
    },
    demo: {
      type: String,
      required:false,
    },
    test: {
      type: String,
      required:false
    }
  },
  setup (props) {
    // console.log(props)
    let myProps = {}
    for (const [key, value] of Object.entries(props)) {
      // console.log(`${key}: ${value}`);
      if(value){
        // @ts-ignore
        myProps[key] = value
      }
    }
    console.log(myProps)
    return {
      ...toRefs(props),
    }
  },
  render () {
    return (
      <div>
        <p>{this.msg.a.c}</p>
        <p>{this.demo}</p>
        <p>{typeof(this.test)}</p>
    </div>
    )
  }

})

export default Demo