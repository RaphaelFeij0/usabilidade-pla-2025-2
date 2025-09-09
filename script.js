const editor = document.getElementById('editor');
const undoStack = [];
const redoStack = [];

editor.addEventListener('input', () => {
    redoStack.length = 0; // Limpa a pilha de refazer ao fazer uma nova alteração
    undoStack.push(editor.innerHTML);
});

function undoAction() {
    if (undoStack.length > 0) {
        redoStack.push(editor.innerHTML);
        const lastState = undoStack.pop();
        editor.innerHTML = lastState;
    }
}

function redoAction() {
    if (redoStack.length > 0) {
        undoStack.push(editor.innerHTML);
        const nextState = redoStack.pop();
        editor.innerHTML = nextState;
    }
}

function deleteAction() {
   
        editor.innerHTML = '';
        undoStack.push(editor.innerHTML);
        redoStack.length = 0;
    
}

function abrirModal() {
            document.getElementById("modalConfirmacao").style.display = "flex";
        }
        function fecharModal() {
            document.getElementById("modalConfirmacao").style.display = "none";
        }
        function confirmarExclusao() {
            alert("Conta excluída com sucesso!");
            document.getElementById('username').value='';
            document.getElementById('password').value='';
            document.getElementById('email').value='';
            
            editor.innerHTML = '';
            undoStack.push(editor.innerHTML);
            redoStack.length = 0;

            fecharModal();
        }