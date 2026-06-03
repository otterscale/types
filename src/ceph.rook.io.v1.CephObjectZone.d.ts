/** Generated from Remote JSON Schema for ceph.rook.io.v1.CephObjectZone */

/**
 * CephObjectZone represents a Ceph Object Store Gateway Zone
 */
export interface CephRookIoV1CephObjectZone {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * ObjectZoneSpec represent the spec of an ObjectZone
   */
  spec: {
    /**
     * If this zone cannot be accessed from other peer Ceph clusters via the ClusterIP Service
     * endpoint created by Rook, you must set this to the externally reachable endpoint(s). You may
     * include the port in the definition. For example: "https://my-object-store.my-domain.net:443".
     * In many cases, you should set this to the endpoint of the ingress resource that makes the
     * CephObjectStore associated with this CephObjectStoreZone reachable to peer clusters.
     * The list can have one or more endpoints pointing to different RGW servers in the zone.
     *
     * If a CephObjectStore endpoint is omitted from this list, that object store's gateways will
     * not receive multisite replication data
     * (see CephObjectStore.spec.gateway.disableMultisiteSyncTraffic).
     */
    customEndpoints?: string[];
    /**
     * The data pool settings
     */
    dataPool?: {
      /**
       * The application name to set on the pool. Only expected to be set for rgw pools.
       */
      application?: string;
      /**
       * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
       * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
       * Do NOT set a default value for kubebuilder as this will override the Parameters
       */
      compressionMode?: 'none' | 'passive' | 'aggressive' | 'force' | '';
      /**
       * The root of the crush hierarchy utilized by the pool
       */
      crushRoot?: string;
      /**
       * The device class the OSD should set to for use in the pool
       */
      deviceClass?: string;
      /**
       * Allow rook operator to change the pool CRUSH tunables once the pool is created
       */
      enableCrushUpdates?: boolean;
      /**
       * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
       */
      enableRBDStats?: boolean;
      /**
       * The erasure code settings
       */
      erasureCoded?: {
        /**
         * The algorithm for erasure coding.
         * If absent, defaults to the plugin specified in osd_pool_default_erasure_code_profile.
         */
        algorithm?: 'isa' | 'jerasure';
        /**
         * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
         */
        codingChunks: number;
        /**
         * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * The number of chunks required to recover an object when any single OSD is lost is the same
         * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
         */
        dataChunks: number;
        [k: string]: unknown;
      };
      /**
       * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
       */
      failureDomain?: string;
      /**
       * The mirroring settings
       */
      mirroring?: {
        /**
         * Enabled whether this pool is mirrored or not
         */
        enabled?: boolean;
        /**
         * Mode is the mirroring mode: pool, image or init-only.
         */
        mode?: 'pool' | 'image' | 'init-only';
        /**
         * Peers represents the peers spec
         */
        peers?: {
          /**
           * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
           */
          secretNames?: string[];
          [k: string]: unknown;
        };
        /**
         * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
         */
        snapshotSchedules?: {
          /**
           * Interval represent the periodicity of the snapshot.
           */
          interval?: string;
          /**
           * Path is the path to snapshot, only valid for CephFS
           */
          path?: string;
          /**
           * StartTime indicates when to start the snapshot
           */
          startTime?: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * Parameters is a list of properties to enable on a given pool
       */
      parameters?: {
        [k: string]: string;
      };
      /**
       * The quota settings
       */
      quotas?: {
        /**
         * MaxBytes represents the quota in bytes
         * Deprecated in favor of MaxSize
         */
        maxBytes?: number;
        /**
         * MaxObjects represents the quota in objects
         */
        maxObjects?: number;
        /**
         * MaxSize represents the quota in bytes as a string
         */
        maxSize?: string;
        [k: string]: unknown;
      };
      /**
       * The replication settings
       */
      replicated?: {
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        hybridStorage?: {
          /**
           * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
           */
          primaryDeviceClass: string;
          /**
           * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
           */
          secondaryDeviceClass: string;
          [k: string]: unknown;
        };
        /**
         * ReplicasPerFailureDomain the number of replica in the specified failure domain
         */
        replicasPerFailureDomain?: number;
        /**
         * RequireSafeReplicaSize if false allows you to set replica 1
         */
        requireSafeReplicaSize?: boolean;
        /**
         * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
         */
        size: number;
        /**
         * SubFailureDomain the name of the sub-failure domain
         */
        subFailureDomain?: string;
        /**
         * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
         */
        targetSizeRatio?: number;
        [k: string]: unknown;
      };
      /**
       * The mirroring statusCheck
       */
      statusCheck?: {
        /**
         * HealthCheckSpec represents the health check of an object store bucket
         */
        mirror?: {
          disabled?: boolean;
          /**
           * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
           */
          interval?: string;
          timeout?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * The metadata pool settings
     */
    metadataPool?: {
      /**
       * The application name to set on the pool. Only expected to be set for rgw pools.
       */
      application?: string;
      /**
       * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
       * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
       * Do NOT set a default value for kubebuilder as this will override the Parameters
       */
      compressionMode?: 'none' | 'passive' | 'aggressive' | 'force' | '';
      /**
       * The root of the crush hierarchy utilized by the pool
       */
      crushRoot?: string;
      /**
       * The device class the OSD should set to for use in the pool
       */
      deviceClass?: string;
      /**
       * Allow rook operator to change the pool CRUSH tunables once the pool is created
       */
      enableCrushUpdates?: boolean;
      /**
       * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
       */
      enableRBDStats?: boolean;
      /**
       * The erasure code settings
       */
      erasureCoded?: {
        /**
         * The algorithm for erasure coding.
         * If absent, defaults to the plugin specified in osd_pool_default_erasure_code_profile.
         */
        algorithm?: 'isa' | 'jerasure';
        /**
         * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
         */
        codingChunks: number;
        /**
         * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * The number of chunks required to recover an object when any single OSD is lost is the same
         * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
         */
        dataChunks: number;
        [k: string]: unknown;
      };
      /**
       * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
       */
      failureDomain?: string;
      /**
       * The mirroring settings
       */
      mirroring?: {
        /**
         * Enabled whether this pool is mirrored or not
         */
        enabled?: boolean;
        /**
         * Mode is the mirroring mode: pool, image or init-only.
         */
        mode?: 'pool' | 'image' | 'init-only';
        /**
         * Peers represents the peers spec
         */
        peers?: {
          /**
           * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
           */
          secretNames?: string[];
          [k: string]: unknown;
        };
        /**
         * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
         */
        snapshotSchedules?: {
          /**
           * Interval represent the periodicity of the snapshot.
           */
          interval?: string;
          /**
           * Path is the path to snapshot, only valid for CephFS
           */
          path?: string;
          /**
           * StartTime indicates when to start the snapshot
           */
          startTime?: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * Parameters is a list of properties to enable on a given pool
       */
      parameters?: {
        [k: string]: string;
      };
      /**
       * The quota settings
       */
      quotas?: {
        /**
         * MaxBytes represents the quota in bytes
         * Deprecated in favor of MaxSize
         */
        maxBytes?: number;
        /**
         * MaxObjects represents the quota in objects
         */
        maxObjects?: number;
        /**
         * MaxSize represents the quota in bytes as a string
         */
        maxSize?: string;
        [k: string]: unknown;
      };
      /**
       * The replication settings
       */
      replicated?: {
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        hybridStorage?: {
          /**
           * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
           */
          primaryDeviceClass: string;
          /**
           * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
           */
          secondaryDeviceClass: string;
          [k: string]: unknown;
        };
        /**
         * ReplicasPerFailureDomain the number of replica in the specified failure domain
         */
        replicasPerFailureDomain?: number;
        /**
         * RequireSafeReplicaSize if false allows you to set replica 1
         */
        requireSafeReplicaSize?: boolean;
        /**
         * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
         */
        size: number;
        /**
         * SubFailureDomain the name of the sub-failure domain
         */
        subFailureDomain?: string;
        /**
         * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
         */
        targetSizeRatio?: number;
        [k: string]: unknown;
      };
      /**
       * The mirroring statusCheck
       */
      statusCheck?: {
        /**
         * HealthCheckSpec represents the health check of an object store bucket
         */
        mirror?: {
          disabled?: boolean;
          /**
           * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
           */
          interval?: string;
          timeout?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Preserve pools on object zone deletion
     */
    preservePoolsOnDelete?: boolean;
    /**
     * The pool information when configuring RADOS namespaces in existing pools.
     */
    sharedPools?: {
      /**
       * The data pool used for creating RADOS namespaces in the object store
       */
      dataPoolName?: string;
      /**
       * The metadata pool used for creating RADOS namespaces in the object store
       */
      metadataPoolName?: string;
      /**
       * PoolPlacements control which Pools are associated with a particular RGW bucket.
       * Once PoolPlacements are defined, RGW client will be able to associate pool
       * with ObjectStore bucket by providing "<LocationConstraint>" during s3 bucket creation
       * or "X-Storage-Policy" header during swift container creation.
       * See: https://docs.ceph.com/en/latest/radosgw/placement/#placement-targets
       * PoolPlacement with name: "default" will be used as a default pool if no option
       * is provided during bucket creation.
       * If default placement is not provided, spec.sharedPools.dataPoolName and spec.sharedPools.MetadataPoolName will be used as default pools.
       * If spec.sharedPools are also empty, then RGW pools (spec.dataPool and spec.metadataPool) will be used as defaults.
       */
      poolPlacements?: {
        /**
         * The data pool used to store ObjectStore data that cannot use erasure coding (ex: multi-part uploads).
         * If dataPoolName is not erasure coded, then there is no need for dataNonECPoolName.
         * WARNING: Do not change this field after creation. Pool names are used in RADOS namespaces and renaming leads to data loss.
         */
        dataNonECPoolName?: string;
        /**
         * The data pool used to store ObjectStore objects data.
         * WARNING: Do not change this field after creation. Pool names are used in RADOS namespaces and renaming leads to data loss.
         */
        dataPoolName: string;
        /**
         * Sets given placement as default. Only one placement in the list can be marked as default.
         * Default is false.
         */
        default?: boolean;
        /**
         * The metadata pool used to store ObjectStore bucket index.
         * WARNING: Do not change this field after creation. Pool names are used in RADOS namespaces and renaming leads to data loss.
         */
        metadataPoolName: string;
        /**
         * Pool placement name. Name can be arbitrary. Placement with name "default" will be used as default.
         */
        name: string;
        /**
         * StorageClasses can be selected by user to override dataPoolName during object creation.
         * Each placement has default STANDARD StorageClass pointing to dataPoolName.
         * This list allows defining additional StorageClasses on top of default STANDARD storage class.
         *
         * @maxItems 10
         */
        storageClasses?: {
          /**
           * DataPoolName is the data pool used to store ObjectStore objects data.
           * WARNING: Do not change this field after creation. Pool names are used in RADOS namespaces and renaming leads to data loss.
           */
          dataPoolName: string;
          /**
           * Name is the StorageClass name. Ceph allows arbitrary name for StorageClasses,
           * however most clients/libs insist on AWS names so it is recommended to use
           * one of the valid x-amz-storage-class values for better compatibility:
           * REDUCED_REDUNDANCY | STANDARD_IA | ONEZONE_IA | INTELLIGENT_TIERING | GLACIER | DEEP_ARCHIVE | OUTPOSTS | GLACIER_IR | SNOW | EXPRESS_ONEZONE
           * See AWS docs: https://aws.amazon.com/de/s3/storage-classes/
           */
          name: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      /**
       * Whether the RADOS namespaces should be preserved on deletion of the object store
       */
      preserveRadosNamespaceDataOnDelete?: boolean;
      [k: string]: unknown;
    };
    /**
     * The name of the zone group the zone is a member of.
     */
    zoneGroup: string;
    [k: string]: unknown;
  };
  /**
   * Status represents the status of an object
   */
  status?: {
    conditions?: {
      lastHeartbeatTime?: string;
      lastTransitionTime?: string;
      message?: string;
      /**
       * ConditionReason is a reason for a condition
       */
      reason?: string;
      status?: string;
      /**
       * ConditionType represent a resource's status
       */
      type?: string;
      [k: string]: unknown;
    }[];
    /**
     * ObservedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    phase?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
