  const options = {
  data() {
    return {
      note: "",
      notes: [],
      editing: false,
      newNote: "",
    };
  },
  methods: {
    addNote() {
      if (!this.note) {
        return;
      }

      const note = {
        id: Date.now(),
        content: this.note,
      };

      this.notes.unshift(note);
      this.note = "";
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },

    editNote(id) {
      this.editing = this.editing == true ? false : true;
      if(this.editing){
        this.newNote = note;
        editNote(id);
      } else {
        note = this.newNote;
      }
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },

    editedNote(e) {
      this.newNote = e.target.value;
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => {
        return id !== note.id;
      });
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
  },
  mounted() {
    this.notes = JSON.parse(localStorage.getItem("notes")) || [];
  },
};

const app = Vue.createApp(options);

app
  .directive("focus", {
    mounted(el) {
      el.focus();
    },
  })
  .mount("#app");
