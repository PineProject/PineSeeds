// Copyright (c) YugaByte, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.  You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License
// is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
// or implied.  See the License for the specific language governing permissions and limitations
// under the License.
//

#pragma once

#include "yb/docdb/schema_packing.h"

#include "yb/rocksdb/sst_dump_tool.h"

namespace yb::tablet {

class KVFormatter : public rocksdb::DocDBKVFormatter {
 public:
  std::string Format(
      const Slice& key, const Slice& value, docdb::StorageDbType type) const override;

  Status ProcessArgument(const std::string& argument) override;

 private:
  docdb::SchemaPackingStorage schema_packing_storage_;
};

} // namespace yb::tablet