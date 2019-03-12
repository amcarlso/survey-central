import React from 'react';

export default function Constructor(props) {

  const Person = function(name, age, hair, weight, birthday) {
    this.name = name;
    this.age = age;
    this.hair = hair;
    this.weight = weight;
    this.birthday = birthday;
  }

  const me = new Person(props.personObj.name, props.personObj.age, props.personObj.hair, props.personObj.weight, props.personObj.birthday)

  return (
    <div>
      <p>Name: {me.name}</p>
      <p>Age: {me.age}</p>
      <p>Hair: {me.hair}</p>
      <p>Weight: {me.weight} lbs. {Math.floor(me.weight / 2.20462)} kgs.</p>
      <p>Birthday: {me.birthday}</p>
    </div>
  )
}