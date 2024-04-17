import React from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from '@react-library/components'

const container = document.getElementById('app')!
const root = createRoot(container)

root.render(<Button>Hello world updated!</Button>)
