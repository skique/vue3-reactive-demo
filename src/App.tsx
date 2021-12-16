import { defineComponent, reactive, ref, toRefs } from 'vue'
import Demo from './components/Demo'

const App = defineComponent({
  name: 'demo',
  components: {Demo},
  setup () {
    const state = reactive({
        msg: {
          a:{
            c: '3'
          },
          b:'2',
        },
        demo: 'demo2',
        test: 'test'
    })
    return {
        ...toRefs(state)
    }
  },
  render () {
    // console.log(this)
    return (
      <div>
        <img alt="Vue logo" src="./assets/logo.png" />
        <p><label>msga</label><input v-model={this.msg.a.c} /></p>
        <p><label>demo</label><input v-model={this.demo} /></p>
        <p><label>test</label><input v-model={this.test} /></p>
        <Demo msg={this.msg} demo={this.demo} test={this.test}/>
        <p>-------</p>
        <Demo msg={this.msg} demo={this.demo} />
        <p>-------</p>
        <Demo msg={this.msg} />
      </div>
    )
  }

})

export default App