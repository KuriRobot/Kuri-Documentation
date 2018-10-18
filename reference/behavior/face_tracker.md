# Tracking Faces
Many states require Kuri to track faces.  For example, the [find face](commanded_behavior/find_face.md) state.  This will require Kuri's head to move, and possibly
for Kuri's base to turn in place.

## Face Tracking Behavior
* Kuri can track a specific face, but defaults to the largest face in the frame
* Kuri will move its head to keep the face in frame
* If Kuri loses track of a face for more than 3 seconds, Kuri will begin a search for the face
* Searching will last for up to 8 seconds
    * The behavior during searching is delegated to the state
    * If any face is found during searching, Kuri will begin tracking that face
