// Copyright 2019 Johannes Marbach
//
// This file is part of "LibrifyJS: libgen.me", hereafter referred
// to as the program.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

let LibrifyJS_LibgenMe = {
    createSearchUrl: function(term, collection, currentPage, perPage) {
        return `https://libgen.me/search/all`
            + `?q=${encodeURIComponent(term)}`
            + `&year=0`
            + `&search=${encodeURIComponent(term)}`
            + `&collection=${encodeURIComponent(collection)}`
            + `&currentPage=${encodeURIComponent(currentPage)}`
            + `&perPage=${encodeURIComponent(perPage)}`
    }
}
