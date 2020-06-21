import React from 'react'
import styled from 'styled-components/macro'

export default function DropdownMenuWohnung(floor) {
  return (
    <Wrapper>
      <DropDown name="wohnung" id="dropdown-wohnung">
        {floor.floor === '' ? (
          <option value="">Zuerst Etage auswählen</option>
        ) : (
          ''
        )}
        {floor.floor === 'Außenbereich' ? (
          <option value="">Außenbereich</option>
        ) : (
          ''
        )}
        {floor.floor === 'Keller' ? <option value="">Keller</option> : ''}
        {floor.floor === 'Erdgeschoss' ? (
          <>
            <option value="">Bitte auswählen</option>
            <option value="1">Wohnung 1</option>
            <option value="2">Wohnung 2</option>
            <option value="3">Wohnung 3</option>
            <option value="4">Wohnung 4</option>
            <option value="5">Wohnung 5</option>
            <option value="6">Wohnung 6</option>
          </>
        ) : (
          ''
        )}
        {floor.floor === '1. Stock' ? (
          <>
            <option value="">Bitte auswählen</option>
            <option value="7">Wohnung 7</option>
            <option value="8">Wohnung 8</option>
            <option value="9">Wohnung 9</option>
            <option value="10">Wohnung 10</option>
            <option value="11">Wohnung 11</option>
            <option value="12">Wohnung 12</option>
          </>
        ) : (
          ''
        )}
        {floor.floor === '2. Stock' ? (
          <>
            <option value="">Bitte auswählen</option>
            <option value="13">Wohnung 13</option>
            <option value="14">Wohnung 14</option>
            <option value="15">Wohnung 15</option>
            <option value="16">Wohnung 16</option>
            <option value="17">Wohnung 17</option>
            <option value="18">Wohnung 18</option>
          </>
        ) : (
          ''
        )}
        {floor.floor === '3. Stock' ? (
          <>
            <option value="">Bitte auswählen</option>
            <option value="19">Wohnung 19</option>
            <option value="20">Wohnung 20</option>
            <option value="21">Wohnung 21</option>
            <option value="22">Wohnung 22</option>
            <option value="23">Wohnung 23</option>
            <option value="24">Wohnung 24</option>
          </>
        ) : (
          ''
        )}
        {floor.floor === '4. Stock' ? (
          <>
            <option value="">Bitte auswählen</option>
            <option value="25">Wohnung 25</option>
            <option value="26">Wohnung 26</option>
            <option value="27">Wohnung 27</option>
            <option value="28">Wohnung 28</option>
            <option value="29">Wohnung 29</option>
            <option value="30">Wohnung 30</option>
          </>
        ) : (
          ''
        )}
        {floor.floor === '5. Stock' ? (
          <>
            <option value="">Bitte auswählen</option>
            <option value="31">Wohnung 31</option>
            <option value="32">Wohnung 32</option>
            <option value="33">Wohnung 33</option>
            <option value="34">Wohnung 34</option>
            <option value="35">Wohnung 35</option>
            <option value="36">Wohnung 36</option>
          </>
        ) : (
          ''
        )}
        {floor.floor === 'Dachgeschoss' ? (
          <>
            <option value="">Bitte auswählen</option>
            <option value="37">Wohnung 37</option>
            <option value="38">Wohnung 38</option>
          </>
        ) : (
          ''
        )}
      </DropDown>
    </Wrapper>
  )
}

const DropDown = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  color: rgb(107 107 107);
  background: rgb(201 193 171);
  font-size: 16px;
  height: 32px;
  width: 100%;
  padding-left: 10px;
  background-image: url('https://res.cloudinary.com/dajgs01gh/image/upload/v1581717374/dropdown_y3kmal.svg');
  background-repeat: no-repeat;
  background-position: 95% center;
`
const Wrapper = styled.div`
  position: relative;
  min-width: 240px;
  max-width: 300px;
`
