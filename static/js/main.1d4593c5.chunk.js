(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={block:"Filter_block__37HM-",title:"Filter_title__1k3OU",input:"Filter_input__1M_f9"}},11:function(t,e,n){t.exports={title:"Contacts_title__qPv_k",titleContact:"Contacts_titleContact__2cKFs",block:"Contacts_block__2UIsz"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a,c=n(0),i=n.n(c),r=n(8),s=n.n(r),o=n(3),l=n(6),b=Object(l.a)("list/addToList"),u=Object(l.a)("list/deletedItem"),j=Object(l.a)("filter/filterChange"),m=n(9),d=n.n(m),h=n(1),O={handleDelete:u},f=Object(o.b)((function(t){var e=t.items,n=t.filter.toLowerCase().trim();return{items:e.filter((function(t){return t.name.toLowerCase().includes(n)}))}}),O)((function(t){var e=t.items,n=t.handleDelete;return Object(h.jsx)("ul",{className:d.a.ul,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:d.a.textContent,children:[Object(h.jsxs)("p",{children:[a,": ",c]}),Object(h.jsx)("button",{className:d.a.btn,type:"button",onClick:function(){return n(e)},children:"X"})]},e)}))})})),p=n(10),_=n.n(p),x={handleChange:j},C=Object(o.b)((function(t){return{filter:t.filter}}),x)((function(t){var e=t.filter,n=t.handleChange;return Object(h.jsxs)("div",{className:_.a.block,children:[Object(h.jsx)("h2",{className:_.a.title,children:"Find contacts by name"}),Object(h.jsx)("input",{className:_.a.input,id:"filter",name:"filter",type:"text",onChange:function(t){n(t.target.value)},value:e})]})})),v=n(4),N=n(15),g=n(16),k=n(20),y=n(19),w=n(33),F=n(7),S=n.n(F),L=function(t){Object(k.a)(n,t);var e=Object(y.a)(n);function n(){var t;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e,n){if(t.props.items.some((function(t){return t.name===e})))alert(e+" is already in contacts ");else{var a={id:Object(w.a)(),name:e,number:n};t.props.addNewToList(a)}},t.handleChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.handleSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(g.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:S.a.form,onSubmit:this.onSubmit,children:[Object(h.jsx)("span",{className:S.a.title,children:"Name"}),Object(h.jsx)("input",{onChange:this.handleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(h.jsx)("span",{className:S.a.title,children:"Number"}),Object(h.jsx)("input",{name:"number",type:"tel",onChange:this.handleChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(h.jsx)("button",{className:S.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),A={addNewToList:b},z=Object(o.b)((function(t){return{items:t.items}}),A)(L),M=n(11),q=n.n(M),D=function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:q.a.title,children:"Phonebook"}),Object(h.jsx)(z,{}),Object(h.jsx)("h2",{className:q.a.titleContact,children:"Contacts"}),Object(h.jsxs)("div",{className:q.a.block,children:[Object(h.jsx)(C,{}),Object(h.jsx)(f,{})]})]})},T=function(){return Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(D,{})})},I=(n(30),n(2)),J=n(17),Z=n(18),B=n(5),E=Object(l.b)({items:[],filter:""},(a={},Object(v.a)(a,b,(function(t,e){return Object(B.a)(Object(B.a)({},t),{},{items:[e.payload].concat(Object(Z.a)(t.items))})})),Object(v.a)(a,u,(function(t,e){return Object(B.a)(Object(B.a)({},t),{},{items:t.items.filter((function(t){return t.id!==e.payload}))})})),Object(v.a)(a,j,(function(t,e){return Object(B.a)(Object(B.a)({},t),{},{filter:e.payload})})),a)),P=Object(I.createStore)(E,Object(J.composeWithDevTools)());s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(o.a,{store:P,children:Object(h.jsx)(T,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__2h61j",title:"ContactForm_title__2VrM8",btn:"ContactForm_btn__2fOmX"}},9:function(t,e,n){t.exports={ul:"ContactList_ul__c6O5c",btn:"ContactList_btn__1rhrs",textContent:"ContactList_textContent__2qE7N"}}},[[31,1,2]]]);
//# sourceMappingURL=main.1d4593c5.chunk.js.map