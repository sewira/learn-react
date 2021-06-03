import React, { useState } from 'react';
import Modal from './Modal';
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const AddNewTodo = () => {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}> + New Todo</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form action="">
            <div className="text">
              <h3>Add New Todo</h3>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Todo"
                autoFocus
              />
            </div>
            <div className="remind">
              <Bell />
              <p>Remind me</p>
            </div>
            <div className="pick-day">
              <div className="title">
                <CalendarDay />
                <p>Choose day</p>
              </div>

              <DatePicker value={day} onChange={(day) => setDay(day)} />
            </div>
            <div className="pick-time">
              <div className="title">
                <Clock />
                <p>Choose Time</p>
              </div>
              <TimePicker value={time} onChange={(time) => setTime(time)} />
            </div>

            <div className="pick-project">
              <div className="title">
                <Palette />
                <p>Choose Project</p>
              </div>
              <div className="projects">
                <div className="project active">Personal</div>
                <div className="project">Work</div>
              </div>
            </div>
            <div className="cancel" onClick={() => setShowModal(false)}>
              <X />
            </div>
            <div className="confirm">
              <button>+ Add Todo</button>
            </div>
          </form>
        </MuiPickersUtilsProvider>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
