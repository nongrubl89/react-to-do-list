(this["webpackJsonpreact-to-do-list"]=this["webpackJsonpreact-to-do-list"]||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),s=a.n(r),o=(a(61),a(62),a(83)),i=a(10),l=a(77),d=a(78),j=a(54),u=a(55),b=a(51),h=a(50),O=a(81),m=a(48),x=a.n(m),p=a(84),f=a(80),v=a(2);function g(e){return Object(v.jsxs)(f.a,{show:e.show,onHide:e.handleClose,animation:!0,centered:!0,children:[Object(v.jsx)(f.a.Header,{closeButton:!0,children:Object(v.jsxs)(f.a.Title,{children:["Add a task to ",e.title]})}),Object(v.jsx)(f.a.Body,{children:Object(v.jsxs)(O.a,{onSubmit:e.handleSubmit,"data-nav":e.buttonNav,children:[Object(v.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(v.jsx)(O.a.Label,{children:"Task Name"}),Object(v.jsx)(O.a.Control,{id:"task",type:"text",placeholder:"Enter task name",onChange:e.handleChange,value:e.task})]}),Object(v.jsxs)(O.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(v.jsx)(O.a.Label,{children:"Select Priority"}),Object(v.jsxs)(O.a.Control,{as:"select",id:"priority",onChange:e.handleChange,value:e.priority,children:[Object(v.jsx)("option",{children:"Select Priority"}),Object(v.jsx)("option",{children:"High"}),Object(v.jsx)("option",{children:"Medium"}),Object(v.jsx)("option",{children:"Low"})]})]}),Object(v.jsx)(u.a,{variant:"primary",type:"submit",children:"Submit"})]})}),Object(v.jsx)(f.a.Footer,{children:Object(v.jsx)(u.a,{variant:"secondary",onClick:e.handleClose,children:"Close"})})]})}var k=a(82),C=a(79);function y(e){var t=c.a.forwardRef((function(e,t){var a=e.children,n=e.onClick;return Object(v.jsxs)(u.a,{className:"btn-primary-outline",ref:t,onClick:function(e){e.preventDefault(),n(e)},children:[Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",className:"bi bi-three-dots-vertical",viewBox:"0 0 16 16",children:Object(v.jsx)("path",{d:"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"})}),a]})})),a=e.tasks.filter((function(t){return t.parentId===e.currentId})).sort((function(e,t){return e.pNumber>t.pNumber?1:-1})).map((function(a){return Object(v.jsxs)(k.a.Item,{className:"d-flex justify-content-between align-items-center",variant:!0===a.complete?"success":"",children:[a.name,Object(v.jsx)("span",{className:"badge badge-primary badge-pill ml-auto pr-2",children:a.priority}),Object(v.jsxs)(C.a,{children:[Object(v.jsx)(C.a.Toggle,{className:"align-items-center",as:t,id:"dropdown-custom-components"}),Object(v.jsxs)(C.a.Menu,{children:[Object(v.jsx)(C.a.Item,{"data-nav":a.uniqueId,onClick:e.deleteTask,children:"Delete"}),Object(v.jsx)(C.a.Item,{"data-nav":a.uniqueId,onClick:e.markTaskComplete,children:"Mark as complete"})]})]})]},a.uniqueId)}));return Object(v.jsxs)(f.a,{show:e.show,onHide:e.handleClose,animation:!0,centered:!0,children:[Object(v.jsx)(f.a.Header,{closeButton:!0,children:Object(v.jsx)(f.a.Title,{children:"Task List"})}),Object(v.jsx)(f.a.Body,{children:a.length?Object(v.jsx)(k.a,{children:a}):Object(v.jsx)("h6",{children:"No Tasks In Project"})}),Object(v.jsx)(f.a.Footer,{children:Object(v.jsx)(u.a,{variant:"secondary",onClick:e.handleClose,children:"Close"})})]})}function T(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),b=o[0],h=o[1],O=Object(n.useState)(""),m=Object(i.a)(O,2),x=m[0],f=m[1],k=Object(n.useState)(""),C=Object(i.a)(k,2),T=C[0],S=C[1],w=function(t){var a=t.target.parentNode.parentNode.dataset.nav;f(a);var n=e.todos.filter((function(e){return e.id===a}));e.setShowTaskForm(!0),h(n[0].title)},N=function(e){var t=e.target.parentNode.parentNode.dataset.nav;S(t),r(!0)},I=e.todos.map((function(t){return Object(v.jsx)(p.a,{style:{width:"21rem"},className:"m-3","data-nav":t.id,children:Object(v.jsxs)(p.a.Body,{children:[Object(v.jsx)(p.a.Title,{children:t.title}),Object(v.jsx)(p.a.Text,{children:t.date}),Object(v.jsx)(u.a,{className:"mr-2",variant:"primary",onClick:w,children:"Add Task"}),Object(v.jsx)(u.a,{className:"mr-2",variant:"primary",onClick:e.deleteTodo,children:"Delete"}),Object(v.jsx)(u.a,{variant:"primary",onClick:N,children:"Show tasks"})]})},t.id)}));return Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{className:"justify-content-md-center pt-3",children:Object(v.jsx)(j.a,{md:6,className:"d-flex justify-content-center",children:Object(v.jsx)("div",{className:"text-center",children:I})})}),Object(v.jsx)(g,{show:e.showTaskForm,handleClose:e.handleTaskFormClose,title:b,handleSubmit:e.handleTaskFormSubmit,buttonNav:x,handleChange:e.handleTaskFormChange,task:e.todoTask,priority:e.priority}),Object(v.jsx)(y,{show:c,handleClose:function(){return r(!1)},currentId:T,tasks:e.tasks,deleteTask:e.deleteTask,markTaskComplete:e.markTaskComplete})]})}function S(e){return Object(v.jsxs)(O.a,{children:[Object(v.jsxs)(O.a.Group,{controlId:"search",children:[Object(v.jsx)(O.a.Label,{children:"Search To-do list"}),Object(v.jsx)(O.a.Control,{type:"text",placeholder:"Search",value:e.keyword,onChange:function(t){return e.setKeyword(t.target.value)}})]}),Object(v.jsx)(u.a,{variant:"primary",type:"submit",onClick:e.searchTodos,children:"Search"}),Object(v.jsx)(u.a,{variant:"primary",onClick:e.clearSearch,children:"Clear Search"})]})}function w(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],m=s[1],p=Object(n.useState)(""),f=Object(i.a)(p,2),g=f[0],k=f[1],C=Object(n.useState)(""),y=Object(i.a)(C,2),w=y[0],N=y[1],I=Object(n.useState)(""),F=Object(i.a)(I,2),D=F[0],B=F[1],L=Object(n.useState)([]),P=Object(i.a)(L,2),G=P[0],M=P[1],q=Object(n.useState)(!1),z=Object(i.a)(q,2),A=z[0],H=z[1],E=Object(n.useState)(""),K=Object(i.a)(E,2),J=K[0],Q=K[1],V=Object(n.useState)(!1),W=Object(i.a)(V,2),R=W[0],X=W[1],_=Object(n.useState)([]),U=Object(i.a)(_,2),Y=U[0],Z=U[1],$=function(){return H(!1)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{children:Object(v.jsx)(d.a,{className:"justify-content-md-center pt-3",children:Object(v.jsxs)(j.a,{md:6,children:[Object(v.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),o&&g?(c([].concat(Object(h.a)(a),[{id:x()(),title:o,date:g}])),m(""),k("")):alert("Please fill in both fields")},children:[Object(v.jsxs)(O.a.Group,{controlId:"formToDoTitle",children:[Object(v.jsx)(O.a.Label,{children:"To-Do"}),Object(v.jsx)(O.a.Control,{type:"text",placeholder:"Enter to-do",value:o,onChange:function(e){return m(e.target.value)}}),Object(v.jsx)(O.a.Text,{className:"text-muted",children:"ex: clean the house, grocery shop"})]}),Object(v.jsxs)(O.a.Group,{controlId:"formDueDate",children:[Object(v.jsx)(O.a.Label,{children:"Due Date"}),Object(v.jsx)(O.a.Control,{type:"date",value:g,onChange:function(e){return k(e.target.value)}})]}),Object(v.jsx)(u.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(v.jsx)(S,{keyword:J,setKeyword:Q,searchTodos:function(e){e.preventDefault(),X(!0);var t=a.filter((function(e){return e.title===J}));Z(t),console.log(J)},clearSearch:function(e){return X(!1)}})]})})}),Object(v.jsx)(T,{todos:R?Y:a,deleteTodo:function(e){var t=e.target.parentNode.parentNode.dataset.nav,n=a.filter((function(e){return e.id!==t})),r=G.filter((function(e){return e.parentId!==t}));M(r),c(n)},handleTaskFormSubmit:function(e){if(e.preventDefault(),w&&D){var t,a=e.target.dataset.nav;"High"===D&&(t=1),"Medium"===D&&(t=2),"Low"===D&&(t=3),M([].concat(Object(h.a)(G),[{name:w,priority:D,parentId:a,uniqueId:x()(),pNumber:t,complete:!1}])),$(),N(""),B("")}else alert("Please fill in both fields")},handleTaskFormChange:function(e){"task"===e.target.id&&N(e.target.value),"priority"===e.target.id&&B(e.target.value)},todoTask:w,todoPriority:D,tasks:G,handleTaskFormClose:$,showTaskForm:A,setShowTaskForm:H,markTaskComplete:function(e){var t=e.target.dataset.nav,a=G.map((function(e){return e.uniqueId===t?Object(b.a)(Object(b.a)({},e),{},{complete:!0}):e}));M(a)},deleteTask:function(e){var t=e.target.dataset.nav,a=G.filter((function(e){return e.uniqueId!==t}));M(a)}})]})}var N=a(56),I=a.n(N),F=a(45);a(70),I.a.config();F.a.initializeApp({apiKey:"AIzaSyD1yMAMC-TWs1QDG0XhaVzeQ8eOD_4pvVg",authDomain:"react-to-do-22865.firebaseapp.com",projectId:"react-to-do-22865",storageBucket:"react-to-do-22865.appspot.com",messagingSenderId:"715680933684",appId:"1:715680933684:web:141a8845f6e24514a92761"});var D=F.a.auth(),B=new F.a.auth.GoogleAuthProvider,L=function(){D.signInWithPopup(B).then((function(e){console.log(e.user)})).catch((function(e){console.log(e.message)}))};function P(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),o=s[0],b=s[1];return Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{className:o?"justify-content-md-center pt-3":"d-none",children:Object(v.jsx)(j.a,{xs:6,className:"d-flex justify-content-center",children:Object(v.jsx)(u.a,{onClick:L,children:"Sign in with Google"})})}),Object(v.jsx)(d.a,{className:o?"justify-content-md-center pt-3":"d-none",children:Object(v.jsx)(j.a,{xs:6,className:"d-flex justify-content-center",children:Object(v.jsx)(u.a,{onClick:function(){c(!0),b(!1)},children:"Continue as guest"})})}),a?Object(v.jsx)(w,{}):""]})}function G(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(o.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(v.jsx)(o.a.Brand,{children:"To-Do List"}),Object(v.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(o.a.Collapse,{id:"basic-navbar-nav"})]}),Object(v.jsx)(P,{})]})}var M=function(){return Object(v.jsx)(G,{})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),q()}},[[72,1,2]]]);
//# sourceMappingURL=main.231de95d.chunk.js.map