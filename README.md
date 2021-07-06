# jsonplaceholder-demo-app

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/jsonplaceholder-demo-app)


Interview Challenges

// Get total number of users by eye color (reduce functions)
<code>
  const usersByEyeColor = users.reduce((acc, cur) => {
    const color = cur.eye_color;
      if (acc[color]) {
        acc[color]++;
      } else {
        acc[color] = 1;
      }
      return acc;
  }, {};
  
  console.log(usersByEyeColor);
  
</code>
