(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{43:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(14),c=n.n(a),s=(n(42),n(21)),i=n(32),l=n(33),o=n(37),d=n(36),j=(n(43),n(1));var u=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"row background",children:e.children})})},m=n(34),b=n.n(m),h={search:function(){return b.a.get("https://randomuser.me/api/?page=1&results=60")}};n(63);var p=function(){return Object(j.jsx)("header",{className:"style",children:Object(j.jsx)("h1",{id:"top",children:"EMPLOYEE DIRECTORY"})})},g=(n(64),{display:"flex",alignItems:"center"});var O=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"search input-group mb-3",children:[Object(j.jsx)("input",{style:g,id:"search",type:"text",className:"form-control",placeholder:"search name","aria-label":"search name"}),Object(j.jsx)("div",{className:"input-group-append",children:Object(j.jsx)("button",{className:"button btn btn-outline-secondary",id:"button-addon2",type:"submit",onClick:function(t){return e.filter(document.querySelector("#search").value)},children:"search"})})]})})};var x=function(e){return Object(j.jsx)("div",{className:"col-4",children:Object(j.jsxs)("div",{className:"card",style:{alignItems:"center",margin:"3rem 3rem",padding:"3rem"},children:[Object(j.jsx)("img",{className:"img-fluid",alt:e.picture,src:e.picture}),Object(j.jsx)("br",{}),Object(j.jsx)("h5",{className:"name",children:e.name}),Object(j.jsx)("div",{className:"gender",children:e.gender}),Object(j.jsx)("div",{className:"age",children:e.age}),Object(j.jsx)("div",{className:"phoneNumber",children:e.phoneNumber}),Object(j.jsx)("div",{className:"email",children:e.email}),Object(j.jsx)("br",{})]})})},f=n(10),v=n(35);n(65);var N=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(v.a,{className:"sortButton",id:"dropdown-basic-button",title:"Sort By",children:[Object(j.jsx)(f.a.Item,{onClick:e.sort,children:"Age"}),Object(j.jsx)(f.a.Item,{onClick:e.sort,children:"Last Name"}),Object(j.jsx)(f.a.Item,{onClick:e.sort,children:"Female"}),Object(j.jsx)(f.a.Item,{onClick:e.sort,children:"Male"})]})})},y=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={originalPeople:[],people:[]},e.filter=function(t){var n=Object(s.a)(e.state.originalPeople);n=n.filter((function(e){return e.name.first.indexOf(t)>=0})),console.log(n),e.setState({people:n})},e.sort=function(t){t.preventDefault();var n=t.target.innerText;console.log(n),console.log(e.state);var r=e.state.originalPeople.sort((function(e,t){return"Last Name"===n?e.name.last>t.name.last?1:-1:"Age"===n?e.dob.age>t.dob.age?1:-1:"Female"===n?e.gender>t.gender?1:-1:"Male"===n?e.gender<t.gender?1:-1:void 0}));e.setState({people:r})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.search().then((function(t){console.log(t.data.results),e.setState({originalPeople:Object(s.a)(t.data.results),people:Object(s.a)(t.data.results)})}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(O,{filter:this.filter}),Object(j.jsx)(N,{sort:this.sort}),Object(j.jsxs)(u,{children:[" ",this.state.people.map((function(e,t){return Object(j.jsx)(x,{name:e.name.first+" "+e.name.last,picture:e.picture.large,age:"Age: "+e.dob.age,gender:"gender: "+e.gender,phoneNumber:"Phone Number: "+e.cell,email:"email: "+e.email},"person "+t)}))]})]})}}]),n}(r.Component);var k=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(y,{})})};c.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.bd25b7c3.chunk.js.map