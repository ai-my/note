document.addEventListener('DOMContentLoaded', () => {
    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

    const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
        )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

    document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
        const table = th.closest('table');
        const tbody = table.querySelector('tbody');
        const thIndex = Array.from(th.parentNode.children).indexOf(th);
        const currentIsAsc = th.classList.contains('sort-asc');

        document.querySelectorAll('th').forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
        th.classList.toggle('sort-asc', !currentIsAsc);
        th.classList.toggle('sort-desc', currentIsAsc);

        Array.from(tbody.querySelectorAll('tr'))
            .sort(comparer(thIndex, !currentIsAsc))
            .forEach(tr => tbody.appendChild(tr));
    })));
});
