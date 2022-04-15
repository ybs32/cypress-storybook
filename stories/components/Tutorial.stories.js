import Tutorial from '@/components/Tutorial.vue'

export default {
  title: 'Tutorial component',
  component: { Tutorial },
}

const Template = (args, { argTypes }) => ({
  components: { Tutorial },
  template: `
    <Tutorial />
  `
})

export const Init = Template.bind({})
