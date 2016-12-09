/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('lessons').del()
    .then(() => {
      return knex('lessons').insert([{
        id: 1,
        user_id: 1,
        title: 'What exactly is React?',
        category: 'React',
        description: 'I will be explaining what React is and why it is useful.',
        published: true,
        body: 'React is often described as “the V in the MVC structure”. This also happens to be the least tangible explanation one could give a newcomer, as (V)iews are typically logic-less files that are driven by a controller. Further, frameworks like Angular, Backbone, Ember, and more already have sufficient view layers — which then begs the question, why do we need to replace the V in MVC with React? The answer is that React doesn’t necessarily want to replace our views — it wants to augment them by allowing you to create highly reusable UI components (tab bars, comment boxes, pop up modals, lists, sortable tables, etc). In other words, the big idea behind React is this: what if you could create your own HTML element that has customized functionality? For example, one could make a <CommentBox> element that would display a textarea, run validations on the text typed into the textarea, submits the form when the enter key is pressed, etc — all just by including one line of code: <CommentBox></CommentBox>. (For those of you coming from the Angular world, you can think of React Components as a close analogy to Directives).',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `const woah = fun => fun + 1;
        const dude = woah(2) + 3;
        function thisIsAFunction() {
          return [1,2,3].map(n => n + 1).filter(n !== 3);
        }
        console.log('making up fake code is really hard');
        function itIs() {
          return 'no seriously really it is';
        }`,
        likes: 0,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 1,
        category: 'Angular1',
        title: 'What exactly is Angular?',
        description: 'I will be explaining what Angular is and why it is useful.',
        published: true,
        body: 'This AngularJS course is built with the intent of exposing you to the best available resources on each Angular topic. Our desire is to present these topics richly, and from a variety of vantage points, in order to afford you a more complete perspective on them. The learning curve of AngularJS can be described as a hockey stick. Getting started with apps featuring basic functionality is delightfully easy. However, building more complex apps often require understanding Angulars inner workings. Failure to do so will cause development to become awkward and cumbersome. With AngularJS, the "Ready, Fire, Aim" learning methodology of duct taping together a handful of tutorials and a cursory glance through the documentation will lead to confusion and frustration. This curriculum is designed to properly guide you through each of the key Angular concepts thoroughly with a broad exposure to high quality content. With your eventual mastery of AngularJS, you will be able to fluently and efficiently construct large-scale applications.',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `const woah = fun => fun + 1;
        const dude = woah(2) + 3;
        function thisIsAFunction() {
          return [1,2,3].map(n => n + 1).filter(n !== 3);
        }
        console.log('making up fake code is really hard');
        function itIs() {
          return 'no seriously really it is';
        }`,
        likes: 0,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        user_id: 1,
        category: 'Backbone',
        title: 'Hello World in Backbone.js',
        description: 'I will be teaching you the basics of Backbone.js with a Hello World example.',
        published: true,
        body: '',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Store("backbone-todo"),
  completed: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  },
  remaining: function() {
    return this.without.apply( this, this.completed() );
  }
});`,
        likes: 0,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 4,
        user_id: 2,
        category: 'Ember',
        title: 'A Tale of Two States',
        description: 'Modern Responsive Design (Illustrated with Ember and Flexi)',
        published: false,
        body: 'I was very tempted to name this post "the state of CSS is Awesome", except that the state of CSS is not awesome. This post is very "tale of two cities in nature". When it comes to layouts and CSS, it is both the best of times and the worst of times. The state of CSS IS awesome, but it IS also broken. CSSNext, PostCSS, ember-component-css, and better CSS practices should give us a lot of optimism for the future. And Flexi, the project which was created to solve the problems this post addresses shows us that even in our current problem state there are elegant, maintainable, performance minded solutions.',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `{{#if device.isMobile}}
  <ul>
    {{#each list as |item|}}
      <li>{{item}}</li>
    {{/each}}
  </ul>

{{else}}

<div class="container-fluid">
  <div class="row">
    <div class="col-sm-4">
      <ul>
        {{#each list as |item|}}
          <li>{{item}}</li>
        {{/each}}
      </ul>
    </div>
    <div class="col-sm-8">
      ... individual item view ...
    </div>
  </div>
</div>

{{/if}}`,
        likes: 0,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 5,
        user_id: 1,
        category: 'Angular2',
        title: 'All about Angular 2.0',
        description: 'Have questions about the strategy for Angular 2.0? This is the place. In the following article I\'ll explain the major feature areas of Angular 2.0',
        published: false,
        body: 'Before we get started talking about the future of Angular, lets take a moment to look at the current version. AngularJS 1.3 is by far the best version of Angular available today. It was just released a few weeks ago. Its chock full of bug fixes, feature enhancements and performance improvements. If youre currently using Angular, you\'ll want to upgrade. If youre starting a new project with Angular, this is the version you\'ll want to be using. It\'s a strong, mature framework and it\'s here today.',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `import {Component} from 'angular';
import {Server} from './server';
@Component({selector: 'foo'})

export class MyComponent {
  constructor(server:Server) {
      this.server = server;
  }
}`,
        likes: 0,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 6,
        user_id: 1,
        category: 'Meteor',
        title: '7 Reasons to Develop Your Next Web App with Meteor',
        description: 'I will be explaining why you should be using Meteor today.',
        published: false,
        body: 'When I first learned about the Meteor JavaScript framework, I saw someone write, “Meteor is to Node.js as Rails is to Ruby,” and I think that’s a good comparison. A few years ago, Rails was the hot new thing on the web, sprinkling some useful “magic” through the development process to make programming on the web more approachable and pleasant. Out of the countless new frameworks that have spawned as of late though, none have made me feel the way Rails did as much as Meteor — a framework that you should seriously consider using for your coming projects. Here’s a few reasons why. Lately, companies like Twitter and Facebook have been moving toward a real-time web. It’s inevitable that, sooner than you probably expect, users will expect web applications to work near-instantaneously. I imagine there’s already users who wince whenever a separate page load is required for simple tasks like changing settings and logging out. The problem is, creating real-time web applications is tricky. Or at least, it was. Meteor has real-time built into its core though. When the database is updated, the data in your templates is updated. When a user clicks a button or submits a form, the action occurs immediately. In the vast majority of cases, this doesn’t even require any extra effort. You build a web application as you normally would and, out of the box, it just happens to be real-time.',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});`,
        likes: 4,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 7,
        user_id: 2,
        category: 'Polymer',
        title: 'An Introduction to Web Components and Polymer',
        description: 'I will explain what a web component is within Polymer.js',
        published: false,
        body: 'When you begin to check out Polymer, you can’t help but immediately be intrigued by its self-professed unique world view. Polymer purports itself as taking a sort of back-to-nature approach that “puts elements back at the center of web development”. With Polymer.js, you can craft your own HTML elements and compose them into complete, complex web applications that are scalable and maintainable. It’s all about creating new (i.e., custom) elements that can then be reused in your HTML pages in a declarative way, without needing to know or understand their internals. Elements, after all, are the building blocks of the web. Accordingly, Polymer’s weltanschauung is that web development should fundamentally be based on extending the existing element paradigm to build more powerful web components, rather than replacing markup with “gobs of script” (to use their words). Stated another way, Polymer believes in leveraging the browser’s “native” technologies rather than relying on an increasingly complex labyrinth of custom JavaScript libraries (jQuery et. al.). An intriguing notion indeed.',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `<dom-module id="contact-card">
  <style>...</style>
    <template>
      <content></content>
      <iron-icon icon="star" hidden$="{{!starred}}"></iron-icon>
    </template>
    <script>
      Polymer({
        is: 'contact-card',
        properties: {
          starred: Boolean
        }
      });
    </script>
</dom-module>`,
        likes: 6,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 8,
        user_id: 1,
        category: 'Vue',
        title: 'Create your first component using Vue.js',
        description: 'I will teach you why Vue is the future and how to build a component.',
        published: false,
        body: 'In this post we create a Vue.js app which uses Vuex for state management. The app simply renders two components; one is a link which when clicked, reverses the string it displays; the other, a list of items which we emit from a faux-eventsource. We also explore a method for mocking out parts of the store for better isolation when testing individual components. You can view the live demo here, or alternatively, check out the repository. Vue.js is a brilliant front-end framework and has a very active and vibrant community supporting it. It also encapsulates the best of angular and react. The Vue.js documentation is up-to-date, extremely beneficial and with the help of one of the CLI templates, it is easy to get an app up and running within a few minutes.',
        js: `var myDropdown = Vue.component('my-dropdown', {
  // Define the template, refers to the template id in the HTML.
  template: '#dropdown',

  // A data object containing all data for this component.
  data: function() {
    return {
      isOpen: false
    }
  },

  // Methods, we will bind these later on.
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    },

    show: function() {
      this.isOpen = true;
    },

    hide: function() {
      this.isOpen = false;
    }
  }
});

// Create new Vue instance
var app = new Vue({
  // Tell Vue #app is the container element.
  el: '#app'
});`,
        likes: 7,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 9,
        user_id: 2,
        category: 'React',
        title: 'What is Redux?',
        description: 'I will explain what Redux is and why it is useful.',
        published: true,
        body: 'While researching which flux implementation to use for our teams final project at Hack Reactor, my friend Nick enthusiastically recommended Redux. Nick is a brilliant front-end engineer who I worked with at Udacity, and is among the most curious and inventive people I know. So when he gets super excited about something, I pay attention. If you havent heard of Redux yet, thats OK. The creator, Dan Abramov, announced it at React-Europe 2015, which, at the time of this writing, was 2 months ago. Was it risky adopting something so new for our teams project? Yes. But the more I learned about Redux, the more obsessed I (and my team) became. And we were not alone.',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `var myDropdown = Vue.component('my-dropdown', {
  // Define the template, refers to the template id in the HTML.
  template: '#dropdown',

  // A data object containing all data for this component.
  data: function() {
    return {
      isOpen: false
    }
  },

  // Methods, we will bind these later on.
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    },

    show: function() {
      this.isOpen = true;
    },

    hide: function() {
      this.isOpen = false;
    }
  }
});

// Create new Vue instance
var app = new Vue({
  // Tell Vue #app is the container element.
  el: '#app'
});`,
        likes: 7,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 10,
        user_id: 1,
        category: 'React',
        title: 'How does the component life cycle work?',
        description: 'I will be walking through how the component life cycle is key to being a great React developer.',
        published: true,
        body: 'While researching which flux implementation to use for our teams final project at Hack Reactor, my friend Nick enthusiastically recommended Redux. Nick is a brilliant front-end engineer who I worked with at Udacity, and is among the most curious and inventive people I know. So when he gets super excited about something, I pay attention. If you havent heard of Redux yet, thats OK. The creator, Dan Abramov, announced it at React-Europe 2015, which, at the time of this writing, was 2 months ago. Was it risky adopting something so new for our teams project? Yes. But the more I learned about Redux, the more obsessed I (and my team) became. And we were not alone.',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `var myDropdown = Vue.component('my-dropdown', {
  // Define the template, refers to the template id in the HTML.
  template: '#dropdown',

  // A data object containing all data for this component.
  data: function() {
    return {
      isOpen: false
    }
  },

  // Methods, we will bind these later on.
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    },

    show: function() {
      this.isOpen = true;
    },

    hide: function() {
      this.isOpen = false;
    }
  }
});

// Create new Vue instance
var app = new Vue({
  // Tell Vue #app is the container element.
  el: '#app'
});`,
        likes: 7,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 11,
        user_id: 2,
        category: 'React',
        title: 'Animations with React?',
        description: 'While animations can be hard, they are not impossible.',
        published: true,
        body: 'While researching which flux implementation to use for our teams final project at Hack Reactor, my friend Nick enthusiastically recommended Redux. Nick is a brilliant front-end engineer who I worked with at Udacity, and is among the most curious and inventive people I know. So when he gets super excited about something, I pay attention. If you havent heard of Redux yet, thats OK. The creator, Dan Abramov, announced it at React-Europe 2015, which, at the time of this writing, was 2 months ago. Was it risky adopting something so new for our teams project? Yes. But the more I learned about Redux, the more obsessed I (and my team) became. And we were not alone.',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `var myDropdown = Vue.component('my-dropdown', {
  // Define the template, refers to the template id in the HTML.
  template: '#dropdown',

  // A data object containing all data for this component.
  data: function() {
    return {
      isOpen: false
    }
  },

  // Methods, we will bind these later on.
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    },

    show: function() {
      this.isOpen = true;
    },

    hide: function() {
      this.isOpen = false;
    }
  }
});

// Create new Vue instance
var app = new Vue({
  // Tell Vue #app is the container element.
  el: '#app'
});`,
        likes: 7,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 12,
        user_id: 2,
        category: 'React',
        title: 'How do you use the React Dev Tools?',
        description: 'I will be explaining and how and why React Dev Tools can help you be a better React Developer.',
        published: true,
        body: 'While researching which flux implementation to use for our teams final project at Hack Reactor, my friend Nick enthusiastically recommended Redux. Nick is a brilliant front-end engineer who I worked with at Udacity, and is among the most curious and inventive people I know. So when he gets super excited about something, I pay attention. If you havent heard of Redux yet, thats OK. The creator, Dan Abramov, announced it at React-Europe 2015, which, at the time of this writing, was 2 months ago. Was it risky adopting something so new for our teams project? Yes. But the more I learned about Redux, the more obsessed I (and my team) became. And we were not alone.',
        html: '<h1>test</h1>',
        css: `span {
  color: \'green\'
}`,
        js: `var myDropdown = Vue.component('my-dropdown', {
  // Define the template, refers to the template id in the HTML.
  template: '#dropdown',

  // A data object containing all data for this component.
  data: function() {
    return {
      isOpen: false
    }
  },

  // Methods, we will bind these later on.
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    },

    show: function() {
      this.isOpen = true;
    },

    hide: function() {
      this.isOpen = false;
    }
  }
});

// Create new Vue instance
var app = new Vue({
  // Tell Vue #app is the container element.
  el: '#app'
});`,
        likes: 7,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));"
      );
    });
};
