import Section from "components/Section"

function Home() {
  const items =[
   { id : 1,
    title: 'Intouchables - Soundtracks OST',
    description: 'Original Soundtrack',
    image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146'
  
  
  },
  { id : 2,
    title: 'Intouchables - Soundtracks OST',
    description: 'Original Soundtrack',
    image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146'
  
  
  },
  { id : 3,
    title: 'Intouchables - Soundtracks OST',
    description: 'Original Soundtrack',
    image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146'
  
  
  },
  { id : 4,
    title: 'Intouchables - Soundtracks OST',
    description: 'Original Soundtrack',
    image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146'
  
  
  },
  { id : 5,
    title: 'Intouchables - Soundtracks OST',
    description: 'Original Soundtrack',
    image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146'
  
  
  }

  ]
  return (
    <div>
      <Section
      title='Recently played'
      more="/blabla"
      items={items}
      />
    </div>
  )
}

export default Home
