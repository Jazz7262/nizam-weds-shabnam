import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. P. Khaja Hussain Sahab,</h2>
                <h5>
                    Prop.: <strong>Khaja Suppliers</strong>, Adoni.
                </h5>
                <h5 className="mt-3">
                    H.No.: 25/86/1, Pateghar Mohallah, Havanapet,
                    <br />
                    Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 99663 03064, <br />
                    +91 93909 68962.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
