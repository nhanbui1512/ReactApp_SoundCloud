const dataFeed = [
    {
      name: 'Ai Đưa Em Về - 1nG x VoVanDuc (Official MV - link in Description )',
      track: 'Related track',
      author: 'abc',
      image:
        'https://al.sndcdn.com/labs-9b6a3bc2-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBNT1JFX09GX1dIQVRfWU9VX0xJS0UKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjYwMTM4NDM2MiIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjUxMjI0ODczNCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjY2OTMyNzI1MSIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjczNTM1MTA5NyIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjQzNzg4OTc5OCIK',
    },
    {
      name: 'QUERRY - QNT x TRUNG TRẦN ft RPT MCK (Prod By RASTZ)',
      track: 'Related track',
      author: 'abc',
      image:
        'https://al.sndcdn.com/labs-5e723669-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBNT1JFX09GX1dIQVRfWU9VX0xJS0UKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEyNzkyMDczMDMiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMTU2NzY4MzMwIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MTU3MjM1MDU4NCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjE1MTY2NTIyNzIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMTg1NTQ5ODk1Igo=',
    },
    {
      name: 'Weekly',
      track: 'Related track',
      author: 'aaa',
      image:
        'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
    },
  
    {
      name: 'pov: it is 2am and you are studying',
      track: 'Discovery Playlists',
      author: 'bbb',
      image: 'https://i1.sndcdn.com/artworks-Zxf4PcBkqmXPzn5P-v3hjdA-t200x200.jpg',
    },
  
    {
      name: 'Focus Brainwaves',
      track: 'Discovery Playlists',
      author: 'bbb',
      image: 'https://i1.sndcdn.com/artworks-pfo2S0KRtLgvqp9E-IGQwyw-t200x200.jpg',
    },
  
    {
      name: 'Weekly',
      track: 'Related track',
      author: 'sontung',
      image:
        'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
    },
  
    {
      name: 'Weekly',
      track: 'Related track',
      author: 'sontung',
      image:
        'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
    },
    {
      name: 'Weekly',
      track: 'Related track',
      author: 'wendy',
      image:
        'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
    },
    {
      name: 'Weekly',
      track: 'Related track',
      author: 'wendy',
      image:
        'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
    },
    {
      name: 'Weekly',
      track: 'Related track',
      author: 'mono',
      image:
        'https://al.sndcdn.com/labs-9576a784-0-t200x200.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEwMDY0ODgzMjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo1MjEwMjA4MzkiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo4ODEyMTc5NDYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3Nzk1Mjc2MDAiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMDg2MTQ0OTEzIgo=',
    },
  ];
export default dataFeed;