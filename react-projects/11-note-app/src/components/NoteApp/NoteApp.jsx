import Note from './Note';
import ColorBox from './ColorBox';
import React, { useState } from 'react';

export default function NoteApp() {
    const [colors, setColors] = useState([
        '#fff',
        '#FFD37F',
        '#FFFA81',
        '#D5FA80',
        '#78F87F',
        '#79FBD6',
        '#79FDFE',
        '#7AD6FD',
        '#7B84FC',
        '#D687FC',
        '#FF89FD',
    ]);
    const [notes, setNotes] = useState([]);
    const [noteTitle, setNoteTitle] = useState('');
    const [inputColor, setInputColor] = useState('#fff');

    const noteTitleHandler = (event) => {
        setNoteTitle([event.target.value]);
    };

    const inputColorHandler = (color) => {
        setInputColor([color]);
    };

    const emptyNoteTitle = () => {
        setNoteTitle('');
        setInputColor('#fff');
    };

    const addNote = () => {
        console.log('s');

        let newNotesObject = {
            id: notes.length + 1,
            title: noteTitle,
            color: inputColor,
        };

        if (noteTitle) {
            setNotes([...notes, newNotesObject]);
        }

        setNoteTitle('');
        setInputColor('#fff');
    };

    return (
        <>
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">
                                My React Note App
                            </div>

                            <br />
                            <br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input
                                            value={noteTitle}
                                            onChange={() => {
                                                noteTitleHandler(event);
                                            }}
                                            id="input-field"
                                            className="form-control"
                                            type="text"
                                            style={{
                                                backgroundColor: inputColor,
                                            }}
                                            placeholder="Something here..."
                                        />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id="color-select">
                                            {colors.map((color) => (
                                                <ColorBox
                                                    color={color}
                                                    key={color}
                                                    onColor={inputColorHandler}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button
                                            onClick={() => {
                                                addNote();
                                            }}
                                            id="btn-save"
                                            type="button"
                                            className="btn btn-outline-info"
                                        >
                                            <span className="fa fa-plus"></span>
                                        </button>
                                        <button
                                            onClick={() => {
                                                emptyNoteTitle();
                                            }}
                                            id="btn-delete"
                                            type="button"
                                            className="btn btn-outline-danger"
                                        >
                                            <span
                                                id="btn-icon"
                                                className="fa fa-eraser"
                                            ></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div
                                                id="listed"
                                                className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns"
                                            >
                                                {notes.map((note) => (
                                                    <Note
                                                        {...note}
                                                        key={note.id}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        </>
    );
}
